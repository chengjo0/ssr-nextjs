import { withRouter } from 'next/router'
import * as React from 'react'
import Layout from '../components/Layout'

type PageProps = {
  router: {
    query: {
      title: string
    }
  }
}

const Page = withRouter<PageProps>(props => {
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
})

export default Page
