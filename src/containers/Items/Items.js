import React, {Component} from 'react';
import classes from './items.module.css';

class Items extends Component {
    render(){
        return(
            <div className = {classes.items}>
                <h4>Hello from  Items</h4>
            </div>
        )
    }
}


export default Items;