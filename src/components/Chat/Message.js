import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
export default React.createClass({
  render: function() {

    return (
      <li className="chat-message__wrapper clearfix">
        <div className={'chat-message' + (!this.props.userSend ? ' chat-message_receive' : '')}>{this.props.text}</div>
      </li>
    )
  }
});
