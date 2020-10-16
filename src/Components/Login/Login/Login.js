import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/icons/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const style = {
    backgroundColor: '#EEF5F3',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '660px',
    

  }


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const googleSignIn= () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(googleProvider)
          .then(res => {
            const { displayName, photoURL,  email } = res.user;
         
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              photo: photoURL,
              email: email,
              success: true
            }
            handleResponse(signedInUser, true);
             
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
          })
      
      }

      const handleResponse = (res, redirect) => {
      
        setLoggedInUser(res);
    
       if (redirect) {
          history.replace(from);
        }
    
      }
     

    

    return (
        <div style={style}>
        <div className="container">
            <nav className="navbar d-flex justify-content-center">
                <div className="navbar-brand" href="#">
                     <img src={logo} width="150" height="50" alt="" loading="lazy"/>
                </div>
                </nav>
                <div className=" d-flex justify-content-center loginArea">
                
                  
                    <div>
                        <h3 style={{textAlign: 'center', fontWeight:'bold'}}>Login with</h3>
                        <br/>
                        <button className="social" onClick={googleSignIn}> <img className="socialImage" src={google} alt="" /> <span style={{ marginLeft: '20px' }}>Continue  with Google</span> </button>
                       <br/>
                        <p className="forgot-password text-center">
                             Don't have an account? <span className="text-info" onClick={googleSignIn} style={{ cursor: 'pointer' }}>Create an account</span>
                         </p>
                    </div>
                  
                </div>
               

            </div>
            
        </div>
    );
};

export default Login;