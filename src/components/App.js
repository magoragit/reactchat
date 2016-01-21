import React from 'react';
import { Link }  from 'react-router';
import events from '../Events.js';

// import Component's here
import Header from './Header.js';
import Chat from './Chat/Chat.js';

export default React.createClass({

  render: function() {

    return (
      <div>
        <Header />

        <Chat />
      </div>
    )
  }
});
