import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import { executeQuery } from '@/lib/senity'
import Image from '../../components/Image'
import SanityPostLayout from '../../layouts/SanityPostLayout'

export const Post = ({ post, author }) => {
  console.log({
    post,
    author,
  })
  const { body, mainImage } = post
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: 'dlqkz6u3',
      dataset: 'production',
    })
    const image = imageBuilder.image(mainImage)
    if (image) {
      setImageUrl(image)
    }
  }, [mainImage])

  return (
    <div>
      <SanityPostLayout {...post}>
        {imageUrl && <Image alt={imageUrl} src={imageUrl} />}
        <BlockContent blocks={body} />
      </SanityPostLayout>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'post',
        },
      },
    ],
    fallback: false,
  }
}

export const getStaticProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  if (!pageSlug) {
    return {
      notFound: true,
    }
  }

  // *[ _type == "post" && slug.current == $slug ][0]{ title, "name": author->name }
  //   const query = `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  //   const query = `*[ _id == "82ad94b3-9d94-477e-b7be-5b533f3553fd" ]`
  // `*[_type=="post"&&slug.current=="${pageSlug}"]{title, body, mainImage, publishedAt, _id, author, "creator": *[_type=="author"&&_id in author._ref]}`

  const authorQuery = `author{"name":^->name,"slug":^->slug.current}`
  const categoryQuery = `categories[]{"title": ^->title,"slug":^->slug.current}`
  const query = `*[_type=="post"&&slug.current=="${pageSlug}"]{title, body, mainImage, publishedAt, _id, "author": ${authorQuery}, "categories": ${categoryQuery}}`

  // const url = `https://dlqkz6u3.api.sanity.io/v2021-06-07/data/query/production?query=${query}`
  // const url = `https://dlqkz6u3.api.sanity.io/v1/data/query/production?query=${query}`
  // const result = await fetch(url).then((res) => res.json())

  const { result: postResult } = await executeQuery(query)
  const post = postResult ? postResult[0] : null
  console.log('postResult: ', postResult)

  const { result: authorResult } = await executeQuery(
    `*[_type=="author"&&_id=="71e44e5b-990f-4734-bdbe-5eb3917b0b3f"]`
  )
  const author = authorResult ? authorResult[0] : null
  console.log('authorResult: ', authorResult)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return { props: { post, author } }
}

export default Post
