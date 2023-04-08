import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import ChangePassword from './components/admin/ChangePassword';
import Product from './components/admin/Product';
import AddProduct from './components/admin/AddProduct';

import Error404 from './components/pages/Error404';
import Error500 from './components/pages/Error500';

import { PrivateRoute, AdminRoute } from './components/private/PrivateRoute';
import ForgotPass from './components/auth/ForgotPass';

function appRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/admin' component={Login} />
        <Route exact path='/forgotpass' component={ForgotPass}></Route>
        {/* <Route exact path="/register" component={Register} /> */}
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/change-password" component={ChangePassword} />

        <PrivateRoute exact path="/applications" component={Product} />
        <PrivateRoute exact path="/application/add" component={AddProduct} />
        <PrivateRoute exact path="/application/:cid" component={AddProduct} />

        <Route exact path="/*" component={Error404} />
        <Route exact path="/error-pages/error-500" component={Error500} />
        <ToastContainer position="top-right" theme="colored" />
      </Switch>
    </BrowserRouter>
  )
}

export default appRoutes;