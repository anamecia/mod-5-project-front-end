import React, { Component } from 'react'
import API from '../API'

class NoteForm extends Component{
    state ={
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleClick = () => {
        const { addNote, toggleShowAddForm } = this.props
        const data = {
            note:{
                title: this.state.title,
                content: this.state.content
            }
        }
        API.createNote(data)
        .then(data => addNote(data))
        .then(() => toggleShowAddForm())
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} type='text' placeholder='Title' name='title'/>
                <textarea onChange={this.handleChange} name='content'/>
                <button onClick={this.handleClick}>Save</button>
            </div>
        )
    } 
}

export default NoteForm