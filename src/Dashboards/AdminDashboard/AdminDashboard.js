import React from 'react';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Route, Switch } from 'react-router';
import ManageJobs from './../ManageJobs/ManageJobs';
import EmployerList from './../EmployerList/EmployerList';

const AdminDashboard = () => {
    return (
        <div>
            
       
        <Switch>
           

        <Route path="/dashboard/ordersList">
              <EmployerList></EmployerList>
          </Route>
          
          <Route path="/dashboard/makeAdmin">
              <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/dashboard/manageServices">
              <ManageJobs></ManageJobs>
          </Route>

        </Switch>
      </div>
    );
};

export default AdminDashboard;