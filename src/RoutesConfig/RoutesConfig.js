import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import Owner from '../pages/owner/Owner';
import RestaurantContext from '../context/RestaurantContext';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <RestaurantContext>
          <Route path="/sign-in" exact>
            <SignIn />
          </Route>
          <Route path="/owner/:restaurantUrl" exact>
            <Owner />
          </Route>
        </RestaurantContext>
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesConfig;
