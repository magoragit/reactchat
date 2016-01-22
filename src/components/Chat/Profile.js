import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
export default React.createClass({

  handleSetting: function() {
    this.props.editMode();
  },

  render: function() {
    return (
      <div>
          <div className="chat-contact chat-contact_profile" onClick = {this.handleSetting}>
            <div className="row">
                    <div className="col-xs-3 chat-contact__avatar">
                       <img src={this.props.user.image} className="chat-contact__image"/>
                    </div>
                    <div className="col-xs-9">
                        <div className="chat-contact__name">
                        {this.props.user.name}
                    </div>
                <p className="chat-contact__desc">
                    <em>{this.props.user.desc}</em>
                </p>

                <p className="chat-contact__desc">
                  <a onClick = {this.handleSetting}>edit profile</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
