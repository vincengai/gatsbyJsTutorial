// 'rafce' is a shortcut for React Functional Component boiler plate 

import React from 'react';
import Layout from '../component/layout';
import { ExampleButton } from '../component/Button/button';

export default function Home() {
  return (
    <Layout>
     <div>Hello From Gatsby</div>
     <ExampleButton>Click Me!</ExampleButton>
    </Layout>
  )
} 