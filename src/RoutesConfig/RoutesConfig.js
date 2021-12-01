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
import Restaurant from '../pages/restaurant/Restaurant';
import OrderContext from '../context/OrderContext';

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
          <OrderContext>
            <Route path="/owner/:restaurantUrl" exact>
              <Owner />
            </Route>
            <Route path="/:restaurantUrl" exact>
              <Restaurant />
            </Route>
          </OrderContext>
        </RestaurantContext>
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesConfig;
