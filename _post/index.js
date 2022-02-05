import SanityListLayout from '@/layouts/SanityListLayout'
import { useEffect } from 'react'

const Post = ({ posts }) => {
  console.log('posts: ', posts)

  useEffect(() => {
    fetch('https://api.github.com/repos/ravuthz/blog/contents')
      .then((res) => res.json())
      .then((result) => {
        if (result && result.length > 0) {
          const blog = result.find((item) => item.path == 'blog')
          console.log({ blog })
          if (blog) {
            fetch(blog.url)
              .then((res1) => res1.json())
              .then((result1) => {
                console.log({ result1 })
              })
          }
        }
      })
  }, [])

  return <SanityListLayout posts={posts} initialDisplayPosts={[]} title="All Posts" />
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
  const authorQuery = `author{"name":^->name,"slug":^->slug.current}`
  const categoryQuery = `categories[]{"title": ^->title,"slug":^->slug.current}`
  const query = encodeURIComponent(
    `*[_type=="post"]{"slug":slug.current, title, body, mainImage, publishedAt, _id, "author": ${authorQuery}, "categories": ${categoryQuery}}`
  )
  const url = `https://dlqkz6u3.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then((res) => res.json())
  const posts = (result && result.result) || []

  //   console.log('posts: ', posts)

  return {
    props: {
      posts,
    },
  }
}

export default Post
