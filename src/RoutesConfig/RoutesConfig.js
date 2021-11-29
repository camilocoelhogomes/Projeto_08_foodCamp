import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signUp/SignUp';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesConfig;
