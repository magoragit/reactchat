import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
import Contact from './Contact.js';

export default React.createClass({


  getInitialState: function() {
    return {contacts: []}
  },

  componentWillMount: function() {
    let self = this;
    let props = this.props;
    props.contacts.map(function(item){

      let ref = new Firebase("https://asdasdasdasdasdasdasd.firebaseio.com/users");

      ref.once("value", function(snapshot) {
        let user = snapshot.child(item.login);

        if (user.exists()) {
          let item = user.val();
          let contact = (<Contact id={item.login} image={item.image} name={item.name} desc={item.desc} selectDialog = {props.selectDialog}/>);
          let contacts = self.state.contacts;
          contacts[contacts.length] = contact;
          self.setState({contacts: contacts});
        }
        else {
          return null;
        }

      });

    });

  },

  render: function() {
    return (
        <div>
          <h3 className="chat-contacts__title">
              Chats
          </h3>
          <ul className="chat-contacts__list">
            {this.state.contacts}
          </ul>
        </div>
    )
  }
});
