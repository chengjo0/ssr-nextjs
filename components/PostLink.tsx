import * as React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  id: number
}

const PostLink = (props: Props) => {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default PostLink
