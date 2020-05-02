import React from 'react';
import layout from "./containers/Layout/layout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cars from './containers/Cars/Cars';
import Electronics from './containers/Electronics/Electronics';
import Electricals from './containers/Electricals/Electricals';
import Bikes from './containers/Bikes/Bikes';
import Furnitures from './containers/Furnitures/Furnitures';
import Fashion from './containers/Fashion/Fashion';

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path = "/"  component = {layout}/>
            <Route exact path = "/cars"  component = {Cars}/>
            <Route exact path = "/electronics"  component = {Electronics}/>
            <Route exact path = "/electrical"  component = {Electricals}/>
            <Route exact path = "/bikes"  component = {Bikes}/>
            <Route exact path = "/furnitures"  component = {Furnitures}/>
            <Route exact path = "/fashion"  component = {Fashion}/>

            


            <Route path = "*"  component = {notFound}/>
          </Switch>
        </Router>   
  )
}


function notFound() {
  return <h2>Page not found</h2>;
}

export default App;
