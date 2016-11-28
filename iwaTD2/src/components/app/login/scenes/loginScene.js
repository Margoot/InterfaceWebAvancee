/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';

const LoginScene = (props) => {
  return (
    <div>
      <h1>Bonjour !</h1>
      Username: <input type="text" placeholder="Username"
                       value={props.usernameEntered}
                       onChange={props.updateUsername} />
      <br />
      Password: <input type="password" placeholder="Password"
                       value={props.passwordEntered}
                       onChange={props.updatePassword} />
      <br />
      <button onClick={props.matchUser}>Login</button>
    </div>
  )
};

export default LoginScene;