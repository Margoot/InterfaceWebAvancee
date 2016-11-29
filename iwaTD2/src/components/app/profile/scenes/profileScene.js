/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const ProfileScene = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, {props.username}!</h1>
        <p>You are logged ! </p>
        <p>You have the possibilty to see, edit and create new cards in the
          cards tab</p>
      </Jumbotron>
    </div>
  )
};

export default ProfileScene;