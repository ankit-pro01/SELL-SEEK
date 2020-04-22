import React from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Banner from "./components/Banner/banner";
import Items from './containers/Items/Items';
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className = "App">
        <Banner />
        <Items />
        <Footer />
      </div>
      
    </div>
  )
}

export default App;
