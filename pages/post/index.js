import SanityListLayout from '@/layouts/SanityListLayout'

const Post = ({ posts }) => {
  console.log('posts: ', posts)
  return <SanityListLayout posts={posts} initialDisplayPosts={[]} title="All Posts" />
}

export const getServerSideProps = async (pageContext) => {
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
