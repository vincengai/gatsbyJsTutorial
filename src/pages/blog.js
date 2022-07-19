// 'rafce' is a shortcut for React Functional Component boiler plate 

import React, {useEffect} from 'react';
import {Link} from 'gatsby';
import Layout from '../component/layout';

const blog = ({location}) => {
  return (
    <Layout>
      <div>This is our Blog Page</div>
    </Layout>
  )
}

export default blog