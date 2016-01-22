import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
export default React.createClass({
  render: function() {

    return (
      <div>
          <div className="chat-contact chat-contact_profile">
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

                <p className="chat-contact__desc">
                  <span>
                      <strong>friends:</strong> 62
                  </span>
                  <span>
                    <strong>message:</strong> 14
                  </span>
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
