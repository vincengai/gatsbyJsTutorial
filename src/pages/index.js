// 'rafce' is a shortcut for React Functional Component boiler plate 

import React, {useEffect} from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
    <span>Hello world! asd</span>

    <div>
      {/* <Link to={{pathname:"/blog"}} >Blog Page</Link> */}
      <Link to="/blog" state={{shoeDetail:"whatever"}} >Blog Page</Link>
    </div>
      
      <a href='https://www.gatsbyjs.org'>Gatsby Docs</a>
    </div>
  )
} 