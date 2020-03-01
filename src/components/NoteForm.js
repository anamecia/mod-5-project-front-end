import React, { Component } from 'react'
import API from '../API'

class NoteForm extends Component{
    state ={
        title: this.props.selectedNote ? this.props.selectedNote.title : '',
        content: this.props.selectedNote ? this.props.selectedNote.content : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleClick = () => {
        const data = {
            note:{
                title: this.state.title,
                content: this.state.content
            }
        }
        
        if(this.props.selectedNote){
            this.updateNote(this.props.selectedNote.id, data)
        }else{
            this.createNewNote(data)
        }
    }

    createNewNote = (data) => {
        const { addNote, toggleShowAddForm } = this.props
        
        API.createNote(data)
        .then(data => addNote(data))
        .then(() => toggleShowAddForm())
    }

    updateNote = (id, data) =>{
        const { toggleShowAddForm, addUpdatedNote, selectedNote } = this.props
       
        API.updateNote(id ,data)
        .then(data => addUpdatedNote(selectedNote, data))
        .then(()=> toggleShowAddForm())
    }

    render(){
        return(
            <div className='notes-form-container'>
                <input onChange={this.handleChange} type='text' placeholder='Title' name='title' value={this.state.title}/>
                <textarea onChange={this.handleChange} name='content' value={this.state.content}/>
                <button onClick={this.handleClick}>Save</button>
            </div>
        )
    } 
}

export default NoteForm