import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
import Message from './Message.js';


export default React.createClass({
  render: function() {

    let messagesList = this.props.data.map(function(msg){
      return(<Message text={msg.body} userSend = {msg.userSend} />)
    });

    return (
      <ul className="chat-area__list">
        {messagesList}
      </ul>
    )
  }
});

