import React, {Component} from 'react';
import classes from './items.module.css';
import Item from './Item/item';

class Items extends Component {
    state = {
        data : ["Cars", "Electronics", "Electrical", "Pets", "Bikes", "Furnitures", "Fashion"]
    }
    render(){
        return(
            <div>
                <h1>Categories</h1>
                <div className = {classes.items}>
                    {this.state.data.map( i => {
                        return  <Item itemName = {i} {...this.props}/>
                    } )}
                </div>
            </div>
            
        )
    }
}


export default Items;