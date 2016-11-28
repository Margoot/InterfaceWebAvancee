/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import LoginScene from '../scenes/loginScene';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'celine',
      password:'dion',
      usernameEntered:'',
      passwordEntered:''
    }
  }

  updateUsername(event) {
    this.setState({usernameEntered: event.target.value});
    //this.setState({usernameEntered: username});
  }

  updatePassword(event) {
    this.setState({passwordEntered: event.target.value});
    //this.setState({passwordEntered: password});
  }

  matchUser() {
    browserHistory.push('/');
    // if (this.state.username === this.state.usernameEntered
    //   && this.state.password === this.state.passwordEntered ) {
    //
    // }
  }


  render() {
    return (
      <LoginScene
        updateUsername={this.updateUsername.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        matchUser={this.matchUser.bind(this)}
        usernameEntered={this.state.usernameEntered}
        passwordEntered={this.state.passwordEntered}
      />
    )
  }
}
