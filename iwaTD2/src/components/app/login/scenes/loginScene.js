/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import { Button,InputGroup,FormControl, FormGroup } from 'react-bootstrap';

const LoginScene = (props) => {
  return (
    <div>
      <h1>Bienvenue !</h1>
      <FormGroup style={{width:200}}>
      <InputGroup>
        <InputGroup.Addon>Username</InputGroup.Addon>
        <FormControl type="text" placeholder="Username"
                     value={props.usernameEntered}
                     onChange={props.updateUsername} />
      </InputGroup>
      <InputGroup>
        <InputGroup.Addon>Password</InputGroup.Addon>
        <FormControl type="password" placeholder="Password"
                     value={props.passwordEntered}
                     onChange={props.updatePassword} />
      </InputGroup>
      <Button bsStyle="primary" onClick={props.matchUser}>Login</Button>
      </FormGroup>
    </div>
  )
};

export default LoginScene;