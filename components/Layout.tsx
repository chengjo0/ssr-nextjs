import * as React from 'react'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const Layout = (props: Props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
