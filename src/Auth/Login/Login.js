import React from 'react';
import Header from './../../containers/Header/Header';
import UserLogin from './../UserLogin/UserLogin';
import EmployerLogin from './../EmployerLogin/EmployerLogin';


const Login = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center">This is log in page</h1>
            <div className="row d-flex m-3 p-2 justify-content-center ">
            
                <div className="col-md-5">
                    <EmployerLogin></EmployerLogin>
                </div>
                <div  className="col-md-5">
                        <UserLogin></UserLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;