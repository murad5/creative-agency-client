import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Topbar.css';
import logo from '../../../images/logos/logo.png'
import { UserContext } from "../../../App";

const Topbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
  const signOut = () =>{
    setLoggedInUser({});
    sessionStorage.clear();

  }
 
  return (
    <Navbar expand="lg"  >

    <Navbar.Brand >
      <img
        src={logo}
        width="120"
        height="56"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"

      />
    </Navbar.Brand  >

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="navbar-nav ml-auto "  >

                 <Link className="nav-link  mr-5 active "  to="/">Home</Link>
                 <Link className="nav-link mr-5 "  to="/">Our Portfolio</Link>
                 <Link className="nav-link mr-5 "  to="/">Our Team</Link>
                 <Link className="nav-link mr-5 "  to="/">Contact Us</Link>

       </Nav>

         
              {

                loggedInUser.success && loggedInUser.isSignedIn ?
                  <button className="btn btn-dark" style={{ marginLeft: '10px', width: '100px' }} onClick={signOut}>Sign Out</button>
                :
                <Link to="/login" ><button style={{ marginLeft: '10px', width: '100px' }} className="btn btn-dark"> Login </button> </Link>

              }
       
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
