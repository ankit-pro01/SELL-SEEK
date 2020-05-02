import React, {Component} from 'react';
import classes from './item.module.css';
import { Route } from 'react-router';

class Item extends Component {
    handleItem = (name) => {
        this.props.history.push(name.toLowerCase())
    }
    render(){
        return(
            <div className = {classes.item} onClick= {() => this.handleItem(this.props.itemName)}>
                <h1>{this.props.itemName}   
                </h1>
            </div>
        )
    }
}


export default Item;