/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {browserHistory} from 'react-router';

import LoginScene from '../scenes/loginScene';
import Store from '../../../../store';

export default class LoginSceneContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'celine',
      password:'dion',
      usernameEntered:'',
      passwordEntered:''
    }
  }

  componentDidMount() {
    Store.saveState(this.state.username);
  }


  updateUsername(event) {
    this.setState({usernameEntered: event.target.value});
  }

  updatePassword(event) {
    this.setState({passwordEntered: event.target.value});
  }

  matchUser() {
    if (this.state.username === this.state.usernameEntered
      && this.state.password === this.state.passwordEntered ) {
      browserHistory.push('/home');
    }
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
