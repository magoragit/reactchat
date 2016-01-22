import React from 'react';
import { Link }  from 'react-router';
import events from '../Events.js';

// import Component's here


export default React.createClass({

  render: function() {

    return (
      <header className="header">
        <div className="row">
          <div className="header__logotype col-xs-10">
            <a href="http://magora-systems.com/">
                <img src="http://magora-systems.com/media/logo.png" alt="Magora Systems" />
            </a>
          </div>


        </div>
      </header>
    )
  }
});
