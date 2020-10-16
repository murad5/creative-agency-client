import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import ServiceListDetails from './ServiceListDetails';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] =useState([]);
    const [changeStatus, setChangeStatus] = useState(false);
    
    
    useEffect(() => {
        fetch('http://localhost:5000/serviceList')
        .then(res => res.json())
        .then(data =>setService(data))

    },[changeStatus])
  

    const handleStatus=(e, id)=>{

        const status = {e};
        console.log(status)
      
        fetch(`http://localhost:5000/update/${id}`,{
            method : 'PATCH',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                setChangeStatus(!changeStatus);
            }

        })
     
      }
    
       
        
      

    return (
        <section className="container-fluid row text-md-left text-center"  >
            
        <div className="col-md-2 col-sm-12" >
             <Sidebar></Sidebar>
        </div>
         
        <div className="col-md-10 col-sm-12 mr-0  "style={{backgroundColor: " #E5E5E5"}}  >
            <div className=" d-flex justify-content-between p-2" >
                <h5 >Service List</h5>
                 <h6> <img style={{height:'40px', width:'40px', borderRadius:'50%'}} src={loggedInUser.photo} alt=""/> {loggedInUser.name}</h6>
            </div>
            <div class="table-responsive-sm">
            <table className="table table-borderless bg-white" >
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                    {
                        service.map(service =><ServiceListDetails key={service._id} setStatus={handleStatus} service={service} ></ServiceListDetails>)
                    }
                </tbody>
                </table>
                </div>
        
            
        </div>
        
    </section>
    );
};

export default ServiceList;