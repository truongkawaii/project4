import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Login from '../../container/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Header from '../HeaderLogin';
import Footer from '../Footer';
import  PrivateRoute from '../../hoc/PrivateRoute';
import Admin from '../../container/Admin';
import AuthRoute from '../../hoc/AuthRoute/AuthRoute';

function App() {
  const token = localStorage.getItem('token');
  return (
    <React.Fragment>
    <ToastContainer/>
      <Header />
      <Router>
        <Redirect from="*" to="/login" />
        <Switch>
          <AuthRoute type="guest" path="/login" component={Login}/>
          <PrivateRoute component={Admin} path="/admin" exact />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default React.memo(App);
