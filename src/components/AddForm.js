import React, { Component } from 'react'
import {TextField,Avatar, Button} from '@material-ui/core'

class AddForm extends Component {
    render() {
        const {onSubmit} = this.props
        return (
            <form onSubmit ={onSubmit}>
                <TextField name="name" label="Name of the food"/>
                <TextField name="calories" label="Calories"/>
                <TextField name="image" label="Image URL"/>
                <Button type="submit" variant="contained" color="primary">Submit</Button>

            </form>
        )
    }
}

export default AddForm
