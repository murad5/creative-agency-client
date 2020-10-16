import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faShoppingCart,faCommentAlt, faBoxOpen, faCommentDots ,faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    const signOut = () =>{
        setLoggedInUser({});
        sessionStorage.clear();
    
      }

    return (
        <div className="sidebar py-4 px-2 " style={{ height: "100%" }}>
        <nav className="navbar ">
            <div className="navbar-brand" href="#">
                     <img src={logo} width="150" height="50" alt="" loading="lazy"/>
             </div>
         </nav>
         
        <ul className="list-unstyled ml-3 py-5  ">

            <li>
                <Link to="/addOrder" style={{textDecoration: 'none'}} className="link text-dark">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                </Link>
            </li>
            <li>
               {
                   !isAdmin ?
                   <Link to="/serviceList" style={{textDecoration: 'none'}}  className="link text-dark">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                   </Link>
                 :
                 <Link to="/orderList" style={{textDecoration: 'none'}}  className="link text-dark">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                 </Link>
               }
            </li>
        
            {  !isAdmin &&
                <li>
                <Link to="/addReview" style={{textDecoration: 'none'}}  className="link text-dark">
                    <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                </Link>
            </li>
            }
                {   isAdmin && <div>
                <li>
                    <Link to="/addService" style={{textDecoration: 'none'}}  className="link  text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAAdmin" style={{textDecoration: 'none',}}  className="link text-dark " >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                    </Link>
                </li>
               </div>
               }
           
        </ul>
        <div>
            <div onClick={signOut} className="text-dark ml-3 d-flex align-items-end" style={{cursor:'pointer'}}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></div>
        </div>
    </div>
    );
};

export default Sidebar;