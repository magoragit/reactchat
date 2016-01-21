import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

export default React.createClass({

  getInitialState : function() {
    return {message: ''}
  },

  handleChangeMessage: function(e) {
    this.setState({message: e.target.value});
  },

  handleAddMessage: function(e) {
    e.preventDefault();
    this.props.handleAddMessage(this.state.message);
    this.setState({message: ''});
  },

  render: function() {
    return (
      <form className="chat-area__write">
        <textarea placeholder="Write your message" onChange = {this.handleChangeMessage} ></textarea>
        <input type="submit" className="chat-area__submit" onClick = {this.handleAddMessage} />
      </form>
    )
  }
});

