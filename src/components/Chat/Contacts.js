import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
import Contact from './Contact.js';

export default React.createClass({

  render: function() {

    let props = this.props;

    let contacts = props.contacts.map(function(item){
      return (<Contact id={item.id} image={item.image} name={item.name} desc={item.desc} selectDialog = {props.selectDialog}/>)

    });

    return (
        <div>
          <h3 className="chat-contacts__title">
            Your contacts
          </h3>
          <ul className="chat-contacts__list">
            {contacts}
          </ul>
        </div>
    )
  }
});
