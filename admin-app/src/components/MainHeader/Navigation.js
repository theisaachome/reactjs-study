import React from 'react';
import AuthContext from '../../../../useReducer-demo/src/store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx)=>{
        return  <nav className={classes.nav}>
        <ul>
          {props.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
