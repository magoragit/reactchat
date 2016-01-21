import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
import Contacts from './Contacts.js';
import Profile from './Profile.js';
import Messages from './Messages.js';
import FormMessage from './AddMessage.js';


export default React.createClass({

  getInitialState: function() {
    return {user: {name: "Borisov Semen", desc: "front-end developer", image: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"},
            contacts: [{id: 1, name: "Ivanov Dmitry", desc: "new person here", image: "https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-128.png"},
                        {id: 2, name: "New user", desc: "one another person", image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"}],
            user_id: 0,
            typing_id: -1,
            messages: [{userSend: true, body: "Hi it's first message from me"},
                       {userSend: false, body: "Semen, hello! I'm bot"}
                      ]
            };
  },

  handleAddMessage : function(msg) {
   let messages = this.state.messages;
   let newMessage = {};

   // prepare
   newMessage.userSend = true;
   newMessage.body = msg;
   messages.push(newMessage);

   // add in state
   this.setState({messages: messages});
  },

  handleSelectDialog : function(id) {
    this.setState({typing_id: id});
  },


  render: function() {

    return (
      <section className="chat">
          <aside className="chat-contacts col-md-4">
            <Profile user = {this.state.user} />
            <Contacts contacts={this.state.contacts} selectDialog = {this.handleSelectDialog} />
          </aside>

           <div className="chat-area  col-md-8">
            {this.state.typing_id == -1 ?
                (<div className="chat-area__advice">
                    Choose user for beginning chat
                </div>)
             :  (  <div>
                      <Messages data = {this.state.messages} />
                      <FormMessage handleAddMessage = {this.handleAddMessage} />
                  </div>
               )
            }
          </div>
      </section>
    )
  }
});
