import React, { Component } from 'react'
import {TextField} from '@material-ui/core'

class Search extends Component {
    render() {
        return (
            <div>
                <TextField onChange={this.props.onSearch} label="Search" placeholder="Search food" />
            </div>
        )
    }
}

export default Search

