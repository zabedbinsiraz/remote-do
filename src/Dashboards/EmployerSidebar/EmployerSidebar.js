import React from 'react';
import { Link } from 'react-router-dom';


const EmployerSidebar = () => {
    return (
        <div className=" d-block p-5 sidebar">
            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/"><i class="far fa-credit-card text-dark"></i>  Order Service</Link>
            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/dashboard/bookingList"><i class="fas fa-sort text-dark"></i>  Your Orders</Link>
            <Link className="nav-item nav-link text-dark p-3 bg-white m-3" to="/dashboard/customerReview"><i class="fas fa-paragraph text-dark"></i>  Write Review</Link>
        </div>
    );
};

export default EmployerSidebar;