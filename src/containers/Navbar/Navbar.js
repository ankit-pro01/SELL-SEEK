import React, {Component} from 'react';
import classes from './Navbar.module.css';
import SearchBar from './Searchbar/SearchBar';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div className = {classes.navbar}>
                <div>logo</div>
                <ul>
                    <li>{<SearchBar />}</li>
                    <li>
                        <Link to = "/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to = "/sell">SELL</Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Navbar;