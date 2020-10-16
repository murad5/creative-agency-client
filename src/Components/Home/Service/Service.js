import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
        <div  className=" col-md-4"  >
          <Link style={{textDecoration:'none'}} to={"/addOrder"}>
            <div className="card  mb-5 " style={{Height:"auto"}} >
                <div className="card-header d-flex justify-content-center">
                    <img className="mx-3 " src={`data:image/png;base64,${service.image.img}`} alt="" width="60"/>
                </div>
            
            <div className="card-body text-center">
                <h6 style={{color:'black'}}>{service.title}</h6>
                <p className="card-text text-secondary text-center">{service.description}</p>
            </div>
                
            </div>
          </Link>
        </div>



     
      
      
       
  
    );
};

export default Service;