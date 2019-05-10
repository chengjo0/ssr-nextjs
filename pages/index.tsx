import * as React from 'react'
import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

// interface Props {
//   title: string
//   id: string
// }

const IndexPage = () => {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}

// IndexPage.getInitialProps = async function() {
//   try {
//     const result = await axios.default.get(
//       `https://api.tvmaze.com/search/shows?q=batman`,
//     )

//     // console.log(JSON.stringify(result.data, undefined, 2))

//     return {
//       shows: result.data.map((entry: { show: string }) => entry.show),
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

export default IndexPage
