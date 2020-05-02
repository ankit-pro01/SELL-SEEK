import React from 'react';
import Navbar from "../Navbar/Navbar"
import Banner from "../../components/Banner/banner"
import Items from '../Items/Items';
import Footer from "../../components/footer/footer"
import './layout.css'

function layout(props) {    
  return (
      <div>
        <Navbar />
        <div className = "layout">
          <Banner />
          <Items {...props} />
          <Footer />
        </div>
      </div>    
  )
}

export default layout;
