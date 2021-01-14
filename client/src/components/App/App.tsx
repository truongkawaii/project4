import React from "react";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
import Login from "../../container/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
   
    <Router>
      <div className="">
        <h2>HI</h2>
      </div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      {/* <ToastContainer /> */}
    </Router>
  );
}

export default App;
