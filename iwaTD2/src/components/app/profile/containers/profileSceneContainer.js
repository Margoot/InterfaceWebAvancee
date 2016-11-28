/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import ProfileScene from '../scenes/profileScene';

export default class ProfileSceneContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ProfileScene

      />
    )
  }
}