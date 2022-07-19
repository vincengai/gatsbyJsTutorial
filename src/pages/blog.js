// 'rafce' is a shortcut for React Functional Component boiler plate 

import React, {useEffect} from 'react';
import {Link} from 'gatsby';

const blog = ({location}) => {

  

  return (
    <div>
      <span>This is our Blog Page</span>
      <span>{location.state.shoeDetail}</span>
      <div>
        <Link to="/">Home Page</Link> 
      </div>
    </div>
  )
}

export default blog