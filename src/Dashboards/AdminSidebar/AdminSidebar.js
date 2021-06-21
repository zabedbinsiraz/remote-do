import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className=" d-block p-5 sidebar">
            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/dashboard/addService"><i class="fas fa-plus text-dark"></i>  Add Service</Link>
            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/dashboard/ordersList"><i class="fas fa-sort text-dark"></i>  Order List</Link>

            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/dashboard/makeAdmin"><i class="fas fa-user-shield text-dark"></i>  Make Admin</Link>
            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/dashboard/manageServices"><i class="fas fa-tasks text-dark"></i>  Manage Services</Link>
        </div>
    );
};

export default AdminSidebar;