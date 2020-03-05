import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }
  
  render() {
    return (
      <Editor 
        editorState={this.state.editorState} 
        onChange={this.onChange} 
        placeholder='hello'/>
    );
  }
}

// ReactDOM.render(<TextEditor/>, document.getElementById('container'));
export default TextEditor