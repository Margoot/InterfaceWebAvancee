/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import ProfileScene from '../scenes/profileScene';
import Store from '../../../../store';

export default class ProfileSceneContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
    }
  }

  componentDidMount() {
    const state = Store.getState();
    if (state) {
      this.setState({username:state}, () => console.log("username: " + this.state.username));
    } else {
      console.log("failed to get username");
    }
  }

  render() {
    return (
      <ProfileScene
        username={this.state.username}
      />
    )
  }
}