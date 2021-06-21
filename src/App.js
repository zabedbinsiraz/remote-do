import React from 'react';
import Login from './Auth/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Dashboards/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import FindJob from './components/FindJob/FindJob';
import PostNewJob from './components/PostNewJob/PostNewJob';
import CreateAccount from './Auth/CreateAccount/CreateAccount';
import EmployerDashboard from './Dashboards/EmployerDashboard/EmployerDashboard';


export const UserContext = createContext();

const App = () => {

  const [loggedInUser,setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

    <Router>
     
          <Switch>
            <Route path="/findJob">
              <FindJob></FindJob>
            </Route>
            <Route path="/login">
              <Login />
              </Route>
              <Route path="/postJob">
                <PostNewJob></PostNewJob>
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/createAccount">
                <CreateAccount></CreateAccount>
              </Route>
              <Route path="/profile">
                <EmployerDashboard></EmployerDashboard>
              </Route>
              
            
            {/* <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute> */}
            
            <Route path="/">
              <FindJob/>
            </Route>
          </Switch>
       
      </Router>
    
      </UserContext.Provider>

  );
};

export default App;









// https://github.com/Porgramming-Hero-web-course/complete-website-client-zabedbinsiraz

// https://plumbing-hero.firebaseapp.com/

// https://plumbing-hero.web.app/




