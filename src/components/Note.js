import React, { Component } from 'react'
var moment = require('moment')

class Note extends Component{

    render(){
        const { note, selectNote } = this.props
        return (
            <div onClick={()=> selectNote(note)}>
                <p>{moment(note.created_at).format("Do MMM YYYY")}</p>
                {note.title && <p>{note.title}</p>}
                <p>{note.content}</p>
            </div>
        )
    }
}

export default Note 