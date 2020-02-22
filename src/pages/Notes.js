import React, { Component } from 'react'
import API from '../API'
import Note from '../components/Note'

class Notes extends Component{

    state = {
        notes: []
    }

    componentDidMount = () => {
        API.getUserNotes()
        .then(data => this.setState({
            notes: data
        }))
    }

    render(){
        return(
            <div>
                {this.state.notes.map(note => <Note note={note} key={note.id}/>)}
            </div>
        )
    }
}

export default Notes