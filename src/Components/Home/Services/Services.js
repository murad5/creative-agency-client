import React, { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import { useEffect } from 'react';




const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(result => setServices(result))

    },[])


    return (
        <section className="service my-5">
           <div className="container">
                    <h2 className="text-center">Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
                    {
                        services.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                    <div className="row mt-5">
                        {
                                services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
            
           </div>
        </section>
    );
};

export default Services;