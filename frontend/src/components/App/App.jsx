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
import DetailCandidate from '../../container/DetailCandidate';
import EditCV from '../../container/EditCV';
import SearchCandidate from '../../container/SearchCandidate';
import RecruitmentAdmin from '../../container/Admin/Recruitment';
import AllList from '../../container/Admin/AllList';
import CandidateAdmin from '../../container/Admin/Candidate';
import PriceList from '../../container/PriceList';
import Checkout from '../../container/Checkout';
import UpgradeVip from '../../container/Upgrade';
import SignUp from '../../container/SignUp';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
            <Route path="/searchcandidate" exact component={SearchCandidate} />
            <Route path="/detail/:id" exact component={DetailsJob} />
            <Route path="/priceList" exact component={PriceList} />
            <Route  path="/checkout/:id" exact component={Checkout} />
            <Route  path="/upgradeVip" exact component={UpgradeVip} />
            <Route path="/editcv/:id" exact component={EditCV} />
            <Route path="/detailcv/:id" exact component={DetailCandidate} />
            <AuthRoute type="guest" path="/login" component={Login} />
            <AuthRoute type="guest" path="/signup" component={SignUp} />
            <PrivateRoute path="/admin" exact>
              <Admin><AllList/></Admin>
            </PrivateRoute>
            <PrivateRoute path="/recruitmentadmin" exact>
              <Admin><RecruitmentAdmin /></Admin>
            </PrivateRoute>
            <PrivateRoute path="/candidateadmin" exact>
              <Admin><CandidateAdmin /></Admin>
            </PrivateRoute>
            <PrivateRoute component={UpLoadJob} path="/uploadjob" exact />
            <PrivateRoute component={Recruitment} path="/recruitment" exact />
            <Route component={Home} path="/home" exact />
            <Redirect from="*" to="/login" />
          </Switch>
        </div>
        <MessengerCustomerChat
    pageId="100946924633446"
    appId="429027068176067"
   
  />
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default React.memo(App);
