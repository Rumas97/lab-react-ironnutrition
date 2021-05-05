 import { TextField, Button, Box} from '@material-ui/core'
import React, { Component } from 'react'
 import './FoodDetails.css'

 class FoodDetails extends Component {
    state={
        quantity:1
    }

    handleChange=(e)=>{
        this.setState({
            quantity:e.target.value
        })
    }

     render() {
         const{food, onToday}= this.props
         const{quantity} = this.state
         return (
             <div>
                
                 <p>Name:{food.name}</p>
                 <p>Calories:{food.calories}</p>
                 <img src={food.image}/>
                 <p onChange={this.handleChange}>{quantity}</p> 
                 <Button onClick={()=>{onToday(food, quantity)}} variant="contained" color="secondary">+</Button>
                
                
             </div>
         )
     }
 }

 export default FoodDetails
