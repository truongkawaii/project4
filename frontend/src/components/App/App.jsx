import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';
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
import PrivateRoute from '../../hoc/PrivateRoute';
import Admin from '../../container/Admin';
import AuthRoute from '../../hoc/AuthRoute/AuthRoute';
import Home from '../../container/Home';
import UpLoadJob from '../../container/UpLoadJob';
import Recruitment from '../../container/Recruitment';
import { getProfileUser } from '../../state/actions';
import DetailsJob from '../../container/DetailsJob';
import EditJob from '../../container/EditJob';
import ManagerCV from '../../container/ManagerCV';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getProfileUser());
    }
  }, [dispatch])

  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Header />
        <div className="content">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/editjob/:id" exact component={EditJob} />
          <Route path="/managercv" exact component={ManagerCV} />
          <Route path="/detail/:id" exact component={DetailsJob} />
          <AuthRoute type="guest" path="/login" component={Login} />
          <PrivateRoute component={Admin} path="/admin" exact />
          <PrivateRoute component={UpLoadJob} path="/uploadjob" exact />
          <PrivateRoute component={Recruitment} path="/recruitment" exact />
          <Route component={Home} path="/home" exact />
          <Redirect from="*" to="/login" />
        </Switch>
        </div>
       
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default React.memo(App);
