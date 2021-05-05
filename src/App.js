import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Paper, Grid} from '@material-ui/core'
import data from './foods.json'
import Foodbox from './components/Foodbox';
import TodaysFood from './components/TodaysFood';


class App extends Component {
  state={
    foods:data,
    filteredFoods: data,
    todaysFood:[]
  }

  handleAddFood=(food)=>{
    this.setState({
      foods:[food, ...this.state.foods]
    })
  }

  handleSearch =(e)=>{
    let input = e.target.value
    const{foods}= this.state

    let filteredFoods= foods.filter((singleFood)=>{
      return singleFood.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredFoods:filteredFoods
    })
  }

  handleAddTodaysFood =(food,quantity)=>{
    let myFood ={...food,quantity}
    const{todaysFood}=this.state

    this.setState({
      todaysFood:[myFood,...todaysFood]
    })
  }

  render(){
    const {foods,filteredFoods,todaysFood}= this.state
    return (
      <Grid container spacing={3}>
         <Grid item xs={6} sm={3}>
            <Paper >
              <Foodbox foods={filteredFoods} onAdd={this.handleAddFood} onSearch={this.handleSearch} onToday={this.handleAddTodaysFood}/>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper>
              <TodaysFood todaysFood={todaysFood}/>
            </Paper>
          
          </Grid>
      </Grid>
        
      
    );
  }

}

export default App;
