// 'rafce' is a shortcut for React Functional Component boiler plate 

import React from 'react';
import Layout from '../component/layout';

const blog = ({location}) => {
  return (
    <Layout>
      <div>This is our Blog Page</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam hic reprehenderit tempora soluta facere! Quas non quidem eveniet sequi minima sed possimus commodi magnam!</p>
    </Layout>
  )
}

export default blog