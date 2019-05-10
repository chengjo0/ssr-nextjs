import * as React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  id: string
}

const PostLink = (props: Props) => {
  return (
    <li>
      <Link as={`/p/${props.title}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default PostLink
