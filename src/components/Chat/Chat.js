import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

// import Component's here
import Contacts from './Contacts.js';
import Profile from './Profile.js';
import Messages from './Messages.js';
import FormMessage from './AddMessage.js';
import Auth from './Auth.js';



export default React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {user: {id: -1, friends: []},
            contacts: [],
            typing_login: -1,
            messages: {}
            };
  },


  // Send new message
  handleAddMessage : function(msg) {
   let messages = this.state.messages;
   let newMessage = {};

   // Prepare
   newMessage.userSend = true;
   newMessage.body = msg;

   // add in state
   this.ref.push(newMessage);

   newMessage.userSend = false;

   this.ref2.push(newMessage);

   // add in
  },


  // Select dialog
  handleSelectDialog : function(id) {
    this.setState({typing_login: id});

    let link = "https://asdasdasdasdasdasdasd.firebaseio.com/users/" + this.state.user.login + "/messages/" + id;
    let link2 = "https://asdasdasdasdasdasdasd.firebaseio.com/users/" + id + "/messages/" + this.state.user.login;

    console.log(link, link2);

    if(this.ref) {
      this.unbind("messages");
    }

    this.ref = new Firebase(link);
    this.ref2 = new Firebase(link2);

    this.bindAsArray(this.ref,  "messages");
  },

  // Authorisation
  handleAuthUser: function(login, password) {
    var ref = new Firebase("https://asdasdasdasdasdasdasd.firebaseio.com/users"),
        self = this;

    ref.once("value", function(snapshot) {
      let user = snapshot.child(login);

      if(user.exists()) {
        user = user.val();

        if(user.password == password) {
          console.log("Unlock");
          self.setState({user: user});
        }
      }
      else {
        console.log("User isn't found");
      }


    });
  },

  render: function() {


    return (
      <section className="chat">
        {this.state.user.id != -1 ?
            (
            <div className="chat__inner">
              <aside className="chat-contacts col-md-4">
                <Profile user = {this.state.user} />
                <Contacts contacts={this.state.user.friends} selectDialog = {this.handleSelectDialog} />
              </aside>

               <div className="chat-area  col-md-8">
                {this.state.typing_login == -1 ?
                    (<div className="chat-area__advice">
                        Choose user for beginning chat
                    </div>)
                 :  (  <div className="chat-area__list_wrapper">
                          <Messages data = {this.state.messages} />
                          <FormMessage handleAddMessage = {this.handleAddMessage} />
                      </div>
                   )
                }
              </div>
            </div>)
            :
            <Auth handleAuth = {this.handleAuthUser} />}
      </section>
    )
  }
});
