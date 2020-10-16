import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
  const signOut = () =>{
    setLoggedInUser({});
    sessionStorage.clear();

  }
 
  return (
    <nav className="navbar navbar-expand-lg  navbar-light  ">

        <div className="navbar-brand" href="#">
          <img src={logo} width="150" height="50" alt="" loading="lazy"/>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav ml-auto text-bold">
                 <Link className="nav-link  mr-5 active "  to="/">Home</Link>
                 <Link className="nav-link mr-5 "  to="/orderList">Our Portfolio</Link>
                 <Link className="nav-link mr-5 "  to="/serviceList">Our Team</Link>
                 <Link className="nav-link mr-5 "  to="/">Contact Us</Link>
          </div>

          <span style={{ color: 'orange', marginRight: '5px' }}  >{loggedInUser.name}</span>
              {

                loggedInUser.success && loggedInUser.isSignedIn ?
                  <button className="btn btn-warning" style={{ marginLeft: '10px', width: '100px' }} onClick={signOut}>Sign Out</button>
                :
                <Link to="/login" ><button style={{ marginLeft: '10px', width: '100px' }} className="btn btn-dark"> Login </button> </Link>

              }
       
       
      </div>
    </nav>
  );
};

export default Navbar;
