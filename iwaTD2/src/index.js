/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginSceneContainer from 'components/app/login/containers/loginSceneContainer';
import HomeSceneContainer from 'components/app/home/containers/homeSceneContainer';
import ProfileSceneContainer from 'components/app/profile/containers/profileSceneContainer';
import CardsSceneContainer from 'components/app/cards/containers/cardsSceneContainer';

render((
  <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path='/' component={LoginSceneContainer} />
    <Route path='home' component={HomeSceneContainer}>
      <Route path='/profile' component={ProfileSceneContainer} />
      <Route path='/cards' component={CardsSceneContainer} />
    </Route>
  </Router>
  </MuiThemeProvider>
), document.querySelector('#app'));

