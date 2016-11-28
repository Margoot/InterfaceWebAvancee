/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, browserHistory} from 'react-router';

import LoginSceneContainer from 'components/app/login/containers/loginSceneContainer';

render((
  <Router history={browserHistory}>
    <Route path='/' component={LoginSceneContainer}>
    </Route>
  </Router>
), document.querySelector('#app'));

