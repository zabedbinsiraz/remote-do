import React, { useContext, useEffect, useState } from 'react';

import SingleApply from './SingleApply';
import { UserContext } from './../../App';


const ApplyingList = () => {

    const [loggedInUser,setLoggedInUser] =  useContext(UserContext);
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    
    

    useEffect(() => {
        fetch('http://localhost:4001/allBookings?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
                console.log(data)
            })
    }, []);
    
    return (
       
     <div>
         <h3 className="text-dark">Your Ordered List</h3>
            <div style={{backgroundColor:'salmon',padding:'20px',height:'100%'}} className="d-flex flex-wrap justify-content-center">
               
               {
                   orders.map(order =>  <SingleApply order={order}></SingleApply>)
               }
            </div>
     </div>
   
    );
};

export default ApplyingList;