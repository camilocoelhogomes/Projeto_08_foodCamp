import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signUp/SignUp';

const RoutesConfig = function () {
  return (
    <Switch>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
    </Switch>
  );
};

export default RoutesConfig;
