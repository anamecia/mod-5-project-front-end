import React, { Component } from 'react'
import API from '../API'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'

class Notes extends Component{

    state = {
        notes: [],
        showAddForm: false,
        selectedNote: ''
    }

    componentDidMount = () => {
        API.getUserNotes()
        .then(data => this.setState({
            notes:  data.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0))

        }))
    }

    toggleShowAddForm = () => {
        this.setState({
            showAddForm: !this.state.showAddForm
        })
    }

    selectNote =  (note) => {
        this.setState({
            selectedNote: note
        }) 
    }

    addNote = (noteToAdd) => {
        this.setState({
            notes: [noteToAdd, ...this.state.notes]
        })
    }

    render(){
        return(
            <div className='notes-container'>
                {this.state.showAddForm  && <NoteForm addNote={this.addNote} toggleShowAddForm={this.toggleShowAddForm}/>}
                {this.state.selectedNote  && <Note selectedNote={this.state.selectedNote}/>}
                {!this.state.showAddForm && !this.state.selectedNote &&
                <>
                <span className='add-button' onClick={this.toggleShowAddForm}> + </span>
                {this.state.notes.map(note => <Note note={note} key={note.id} selectNote={this.selectNote}/>)}
                </>}
            </div>
        )
    }
}

export default Notes