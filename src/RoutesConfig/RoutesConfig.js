import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signUp/SignUp';
import Owner from '../pages/owner/Owner';
import RestaurantContext from '../context/RestaurantContext';
import Restaurant from '../pages/restaurant/Restaurant';
import OrderContext from '../context/OrderContext';
import Home from '../pages/Home/Home';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <RestaurantContext>
          <Route path="/" exact>
            <Home />
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
