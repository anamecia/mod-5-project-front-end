import React, { Component } from 'react'
import SearchForm from './SearchForm'

class MyDrugs extends Component {

    state = {
        displaySearchForm: false
    }

    handleClick = () => {
        this.setState({
            displaySearchForm: true
        })
    }

    render(){
        return(
            <div>
                {this.state.displaySearchForm && <SearchForm/>}
                <p>Rescue Drugs</p>
                <span onClick={this.handleClick}> + </span>
                <p>Regular Drugs</p>
                <span onClick={this.handleClick}> + </span>
            </div>
        )
    }  
}

export default MyDrugs 