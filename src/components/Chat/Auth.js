import React from 'react';
import { Link }  from 'react-router';
import events from '../../Events.js';

export default React.createClass({

  getInitialState: function() {
    return {login: 'chatbot', password: '123'};
  },

  handleChangeLogin: function(e) {
    this.setState({login: e.target.value})
  },

  handleChangePassword: function(e) {
    this.setState({password: e.target.value})
  },

  handleAuth: function(e) {
    e.preventDefault();
    this.props.handleAuth(this.state.login, this.state.password);
  },

  render: function() {

    return (
      <form className="auth">
        <h4 class="auth__title">
          Auth in chat
        </h4>
        <div class="form-group">
          <label for="exampleInputEmail">Your login</label>
          <input type="text" className="form-control" id="exampleInputEmail" value = {this.state.login} onChange={this.handleChangeLogin} placeholder="Login" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword"  value = {this.state.password} onChange={this.handleChangePassword} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default auth__submit" onClick={this.handleAuth}>Auth</button>
      </form>
    )
  }
});
