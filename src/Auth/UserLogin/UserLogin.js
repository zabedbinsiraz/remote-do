import React, { useContext, useState } from 'react';
import logo from '../../logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from './../../App';





const UserLogin = () => {
  

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        applicantName: '',
        email: '',
        photo: '',
        error: '',
        success: false

    })


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                const { displayName, email, photoURL } = user;
                const signedInUser = {
                    isSignedIn: true,
                    applicantName: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                setUserToken();


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        console.log('clicked')
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            // Handle error
        });
    }

    return (
        <div className="container d-flex justify-content-center m-5 p-5">

            <div className="row text-center">
                <div className="mb-5 ms-4">
                    {
                        loggedInUser.email ? <h2>{loggedInUser.name}</h2>
                            : <h2>Login</h2>
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </div>
                    <div>
                        <h4>RemoteDo</h4>
                    </div>
                </div>

                <div
                    className=" text-center">
                    <button onClick={() => { handleGoogleSignIn() }} className="btn-primary btn ms-5 mt-5" style={{ height: '70px', width: '400px', fontSize: '36px' }}>
                        {
                            user.isSignedIn ? 'You Logged In Successfully' : 'Continue With Google'
                        }
                    </button>
                </div>

            </div>

        </div>
    );
};

export default UserLogin;