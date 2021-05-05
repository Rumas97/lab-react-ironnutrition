import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'
import FoodDetails from './FoodDetails'
import AddForm from './AddForm'
import Search from './Search'

class Foodbox extends Component {

    state={
        showForm:false
    }
    handleShowForm=()=>{
        this.setState({showForm: true})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const{name,calories,image}= e.target

        let newFood ={
            name: name.value,
            calories: calories.value,
            image: image.value
        }
        this.setState({showForm:false},()=>{
            this.props.onAdd(newFood)
        })
    }
    
    render() {
        
       const{foods, onSearch, onToday} = this.props
       const{showForm}= this.state

        return (
            <div>
               <h2>IronNutrition</h2>
               <Search onSearch={onSearch}/>
               {
                   showForm?
                    <AddForm onSubmit ={this.handleSubmit}/>:
                    <Button onClick={this.handleShowForm} variant="contained" color="primary">Add new food</Button>
               }

               
               
               {
                   foods.map((food,index) => {
                       return <FoodDetails food={food} key={index} onToday={onToday}/>
                   })
               }
            </div>
        )
    }
}

export default Foodbox

