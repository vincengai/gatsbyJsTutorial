import React from 'react'
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';

import './layout.css';

const layout = ({children}) => {
  return (
    <>
     <Navbar /> 
        <main>
            {children} 
        </main>
     <Footer />
    </>
  )
}

export default layout