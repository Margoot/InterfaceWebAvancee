/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import HomeScene from '../scenes/homeScene';

export default class HomeSceneContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <HomeScene
        children={this.props.children}
      />
    )
  }
}