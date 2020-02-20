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
                <div id='my-drugs-container'>
                    <p>Rescue Drugs</p>
                    <span onClick={this.handleClick}> + </span>
                    <p>Regular Drugs</p>
                    <span onClick={this.handleClick}> + </span>
                </div>
            </div>
        )
    }  
}

export default MyDrugs 