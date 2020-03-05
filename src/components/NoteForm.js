import React, { Component } from 'react'
import API from '../API'
import Error from '../components/Error';
import TextEditor from './TextEditor';




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

    // handleChangeTextarea = (value) => {
    //     this.setState({
    //         content: value
    //     })
    // }

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
            if (data.error) throw Error(data.error)
            addNote(data)
            toggleShowAddForm()
            }).catch( error  => console.log(data.error[0]))
    }

    updateNote = (id, data) =>{
        const { toggleShowAddForm, addUpdatedNote, selectedNote } = this.props
       
        API.updateNote(id ,data)
        .then(data => addUpdatedNote(selectedNote, data))
        .then(()=> toggleShowAddForm())
    }

   

    render(){
        return(
            <>
                {/* <Error error={this.state.noteErrors}/> */}
                <div className='notes-form-container'>
                    <input onChange={this.handleChange} type='text' placeholder='Title' name='title' value={this.state.title}/>
                    <textarea onChange={this.handleChange} name='content' value={this.state.content}/>
                    {/* <Editor  className='note-content' editorState={this.state.editorState} onChange={this.onChange} /> */}
                    {/* <TextEditor/> */}
                    <button className="notes-save-button" onClick={this.handleClick}>Save</button>
                </div>
            </>
        )
    } 
}

export default NoteForm

