import * as React from 'react'
import Layout from '../components/Layout'
import * as axios from 'axios'
import { NextContext } from 'next'

type Props = {
  show: {
    name: string
    summary: string
    image: {
      medium: string
    }
  }
}

const Post = (props: Props) => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} />
    </Layout>
  )
}

Post.getInitialProps = async function(ctx: NextContext) {
  const { id } = ctx.query

  try {
    const result = await axios.default.get(`https://api.tvmaze.com/shows/${id}`)
    return {
      show: result.data,
    }
  } catch (error) {
    console.log(error)
  }
}

export default Post
