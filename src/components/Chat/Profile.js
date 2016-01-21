import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
export default React.createClass({
  render: function() {

    return (
      <div>
          <h3 className="chat-contacts__title">
             Your profile
          </h3>
          <div className="chat-contact">
            <div className="row">
                    <div className="col-md-4">
                       <img src={this.props.user.image} className="chat-contact__image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="chat-contact__name">
                        {this.props.user.name}
                    </div>
                <p className="chat-contact__desc">
                    {this.props.user.desc}
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
