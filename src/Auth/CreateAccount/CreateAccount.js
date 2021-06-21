import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateEmployer from '../CreateEmployer/CreateEmployer';

import Header from './../../containers/Header/Header';
import UserLogin from './../UserLogin/UserLogin';

const CreateAccount = () => {
    const [isEmployer, setIsEmployer] = useState();

    const [isJobSeeker, setIsJobSeeker] = useState();

    const createAccountEmployer = () =>{
        
        setIsEmployer(true);
        setIsJobSeeker(false)
    
    }
    const createAccountJobSeeker = () =>{
        
            setIsEmployer(false);
            setIsJobSeeker(true)
    
    }
   
    return (
        <div>
            <Header></Header>
            <Button onClick={() => createAccountEmployer()}>Employer</Button>
            <Button onClick={() => createAccountJobSeeker()}>Job Seeker</Button>

            
                {
                    isEmployer && <CreateEmployer></CreateEmployer>
                }
                {
                    isJobSeeker && <UserLogin></UserLogin>
                }
            
        </div>
    );
};

export default CreateAccount;