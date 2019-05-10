import * as axios from 'axios'
import * as React from 'react'
import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

interface Props {
  shows: Array<{
    id: number
    name: string
  }>
}

const IndexPage = (props: Props) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <PostLink id={show.id} title={show.name} key={show.id} />
        ))}
      </ul>
    </Layout>
  )
}

IndexPage.getInitialProps = async function(): Promise<Props> {
  try {
    const result = await axios.default.get(
      `https://api.tvmaze.com/search/shows?q=batman`,
    )

    return {
      shows: result.data.map((entry: { show: string }) => entry.show),
    }
  } catch (error) {
    console.log(error)
  }
  return { shows: [] }
}

export default IndexPage
