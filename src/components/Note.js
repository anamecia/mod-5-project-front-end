import React, { Component } from 'react'
var moment = require('moment')

class Note extends Component{

    render(){
        const { note, selectNote, selectedNote } = this.props
        const current_note = selectedNote ? selectedNote : note
        return (
                        
             <div className='note-container'onClick={()=> selectNote(current_note)}>
                <p className='note-date'>{moment(current_note.created_at).format("Do MMM YYYY")}</p>
                {current_note.title && <p className='note-content'>{current_note.title}</p>}
                {selectedNote && <p className='note-content'>{current_note.content}</p>}
            </div>
        )
    }
}

export default Note 