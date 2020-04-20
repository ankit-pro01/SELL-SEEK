import React from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Banner from "./components/Banner/banner";
import Items from './containers/Items/Items';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Items />
    </div>
  )
}

export default App;
