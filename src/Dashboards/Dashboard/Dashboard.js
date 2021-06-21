import React, { useContext, useEffect, useState } from 'react';

import AdminSidebar from './../AdminSidebar/AdminSidebar';
import AdminDashboard from './../AdminDashboard/AdminDashboard';
import EmployerSidebar from './../EmployerSidebar/EmployerSidebar';
import EmployerDashboard from './../EmployerDashboard/EmployerDashboard';
import { UserContext } from './../../App';



const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({
        email: ''
    });
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch('http://localhost:4001/allAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                const mail = { email: data[0] }
                setAdmin(mail)
                setLoading(false)
                console.log(data[0], 'data')
            })
    }, []);
    return (


        <div>

            <div className='col-md-3' >
                <AdminSidebar></AdminSidebar>
            </div>
            <div className='col-md-8'>
                <AdminDashboard></AdminDashboard>
            </div>
        </div>

        
       
    );
};

export default Dashboard;