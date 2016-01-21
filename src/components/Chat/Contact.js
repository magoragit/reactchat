import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

export default React.createClass({


  handleSelectDialog: function() {
    this.props.selectDialog(this.props.id);
  },

  render: function() {

    return (
      <li className="chat-contact" onClick={this.handleSelectDialog}>
        <div className="row">
          <div className="col-md-4">
            <img src={this.props.image} className="chat-contact__image"/>
          </div>
          <div className="col-md-8">
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
