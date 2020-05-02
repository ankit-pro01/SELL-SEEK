import React, {Component} from 'react';
import classes from './SearchBar.module.css';

class SearchBar extends Component {
    render(){
        return(
            <div className = {classes.SearchBar}>
                <input type = "text" placeholder = "Search city.."></input>
                <button>#</button>
            </div>
        )
    }
}


export default SearchBar;