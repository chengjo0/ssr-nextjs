import * as React from 'react'
import Layout from '../components/Layout'
import * as axios from 'axios'
import { NextContext } from 'next'

type Props = {
  testTitle: string
  show: {
    name: string
    summary: string
    image: {
      medium: string
    }
  }
}

const Post = (props: Props) => {
  console.log(props.testTitle)

  return (
    <Layout>
      <h1>{props.testTitle}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} />
    </Layout>
  )
}

Post.getInitialProps = async function(
  ctx: NextContext<{ id: string; testTitle: string }>,
): Promise<Props> {
  const { id, testTitle } = ctx.query

  const result = await axios.default.get(`https://api.tvmaze.com/shows/${id}`)
  return {
    show: result.data,
    testTitle,
  }
}

export default Post
