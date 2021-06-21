import React from 'react';
import { Route, Switch } from 'react-router';
import ApplyingList from '../PostingList/ApplyingList';
import PostNewJob from './../../components/PostNewJob/PostNewJob';


const EmployerDashboard = () => {
    return (
        <div>
          

        
             

      
                <ApplyingList></ApplyingList>
           
           
             <PostNewJob></PostNewJob>
      
            
           

         
        </div>
    );
};

export default EmployerDashboard;