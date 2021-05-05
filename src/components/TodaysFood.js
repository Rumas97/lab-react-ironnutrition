import React, { Component } from 'react'

class TodaysFood extends Component {
    render() {
        const{todaysFood} = this.props

        let total = todaysFood.reduce((acc,elem)=>{
            return acc + elem.calories*elem.quantity
        },0)

        

        return (
            <div>
                <h1>Today's Food</h1>
                
                {
                    todaysFood.map((food,index)=>{
                        
                        return (
                            
                            <div key={index}>
                            <p>Name:{food.name}</p>
                            <p>Calories:{food.calories}</p>
                            <img src={food.image}/>
                            
                            </div>
                            
                        )
                        
                    })
                }
                <h2>Total calories:{total}</h2>
            </div>
        )
    }
}

export default TodaysFood
