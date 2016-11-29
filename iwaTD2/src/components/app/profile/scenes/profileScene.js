/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

const ProfileScene = (props) => {
  return (
    <div>
  <Jumbotron>
    <h1>Hello, {props.username}!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </Jumbotron>
    </div>
  )
};

export default ProfileScene;