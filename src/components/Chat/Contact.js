import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

export default React.createClass({


  handleSelectDialog: function() {
    this.props.selectDialog(this.props.id);
  },

  render: function() {

    return (
      //<li className={'chat-contact {this.props.activeId === this.props.id ? 'chat-contact_active' : ''}'} onClick={this.handleSelectDialog}>
      <li className='chat-contact' onClick={this.handleSelectDialog}>
        <div className="row">
          <div className="col-xs-3 chat-contact__avatar">
            <img src={this.props.image} className="chat-contact__image"/>
          </div>
          <div className="col-xs-9">
            <div className="chat-contact__name">
              {this.props.name}
            </div>
            <p className="chat-contact__desc">
              {this.props.desc}
            </p>
          </div>
        </div>
      </li>
    )
  }
});
