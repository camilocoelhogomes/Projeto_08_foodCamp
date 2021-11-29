import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesConfig;
