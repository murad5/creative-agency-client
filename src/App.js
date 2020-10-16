import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import CustomerService from './Components/Dashboard/CutomerService/CustomerService';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import AddReview from './Components/Dashboard/AddReview/AddReview'
import AddService from './Components/Dashboard/AddService/AddService';
import Order from './Components/Dashboard/Order/Order';
export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService">
           <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/addOrder">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <CustomerService></CustomerService>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <Route path="/makeAAdmin">
              <MakeAdmin></MakeAdmin>
          </Route>


        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
