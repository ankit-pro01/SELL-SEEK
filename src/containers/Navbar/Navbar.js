import React, {Component} from 'react';
import classes from './Navbar.module.css';

class Navbar extends Component {
    render(){
        return(
            <div className = {classes.navbar}>
                <h2>Hello from Nav bar</h2>
            </div>
        )
    }
}


export default Navbar;