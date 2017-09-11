/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch, NavLink } from 'react-router-dom';
import ProductPage from './ProductPage';
import ShoppingCart from '../containers/ShoppingCart';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="small-12 cell">
              <div className="shop__nav">
                <NavLink exact to="/">Product</NavLink>
                {/* <span className="divider">|</span> */}
                <NavLink to="/cart">Shopping Cart</NavLink>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={ProductPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
