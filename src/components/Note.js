import React, { Component } from 'react'
import bin from '../images/bin.svg'
import edit from '../images/edit.svg'
var moment = require('moment')

class Note extends Component{

    render(){
        const { note, selectNote, selectedNote, clearSelectedNote } = this.props
        const current_note = selectedNote ? selectedNote : note
        return (
            <>      
                <div className='note-container'onClick={()=> selectNote(current_note)}>
                    <div>
                        <p className='note-date'>{moment(current_note.created_at).format("Do MMM YYYY")}</p>
                        {selectedNote && 
                            <div>
                                <img src={edit}/>
                                <img src={bin}/>
                            </div>
                        }
                    </div>
                    <p className='note-title'>{current_note.title ? current_note.title : 'Untitled '}</p>
                    {selectedNote && <p className='note-content'>{current_note.content}</p>}
                </div>
                {selectedNote && <button id='notes-back-button' onClick={clearSelectedNote}>Back</button>}
            </>
        )
    }
}

export default Note 