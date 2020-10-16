import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './CustomerService.css'

const CustomerService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/order?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))

    })
    return (
      <section className="customer-service">
          <div className="row">
            <div className="col-md-2">.
                 <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 p-4 pr-5 ">
                <h5 className="pt-3 text-brand">Orders</h5>
                <div style={{backgroundColor: " #E5E5E5" ,padding: '20px',height:'600px',}} >
             

                        {
                            orders.map(order =>(
                                <div className="card-deck col-md-4 float-left mb-3">
                                <div className="card ">
        
                                <div className="card-header d-flex justify-content-between">
                                
                                    <img className="mx-3 d-flex " src={`data:image/png;base64,${order.image.img}`} width="60" alt=""/> 
                                    
                                    <div className="status text-center" style={{backgroundColor:' #FFE3E3'}}>{order.status}</div>
                                    
                                </div>
                                <div className="card-body ">
                                    <h5 style={{color:'black'}}>{order.service}</h5>
                                    <p className="card-text text-secondary ">{order.description}</p>
                                </div>
                             </div>
                             </div>
                            )
                            )
                        }
            </div>
          
            </div>
          </div>

      </section>
    );
};

export default CustomerService;