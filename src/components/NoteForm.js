import React, { Component } from 'react'
import API from '../API'
import Errors from '../containers/Errors';




class NoteForm extends Component{

    state ={
        title: this.props.selectedNote ? this.props.selectedNote.title : '',
        content: this.props.selectedNote ? this.props.selectedNote.content : '',
        noteErrors: []
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
        .then(data =>{
            addNote(data)
            toggleShowAddForm()})
    }

    updateNote = (id, data) =>{
        const { toggleShowAddForm, addUpdatedNote, selectedNote } = this.props
       
        API.updateNote(id ,data)
        .then(data => addUpdatedNote(selectedNote, data))
        .then(()=> toggleShowAddForm())
    }

    validationForContent = () => {
        if(!this.state.content){
            this.setState({noteErrors: ["Note content can't be empty"]})
            return false
        }
    }

   

    render(){
        return(
            <>
                {/* <Errors errors={this.state.noteErrors}/> */}
                <div className='notes-form-container'>
                    <input onChange={this.handleChange} type='text' placeholder='Title' name='title' value={this.state.title}/>
                    <textarea onChange={this.handleChange} name='content' value={this.state.content}/>
                    <button className="notes-save-button" onClick={this.handleClick}>Save</button>
                </div>
            </>
        )
    } 
}

export default NoteForm

