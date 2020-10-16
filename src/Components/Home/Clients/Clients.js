import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Clients = () => {
    return (
        <section className="client-section">
            <div className="container ">
            <div className="row d-flex justify-content-center  text-md-left text-center ">
                <div className="col-md-2 my-5" >
                    <img style={{height: '70%', width: '70%'}} src={slack} alt=""/>
                </div>
                <div className="col-md-2 my-5 " >
                    <img style={{height: '70%', width: '70%'}} src={google} alt=""/>
                </div>
                <div className="col-md-2 my-5 " >
                    <img style={{height: '70%', width: '70%'}} src={uber}alt=""/>
                </div>
                <div className="col-md-2 my-5 " >
                    <img style={{height: '70%', width: '70%'}} src={netflix} alt=""/>
                </div>
                <div className="col-md-2 my-5" >
                    <img style={{height: '70%', width: '70%'}} src={airbnb}alt=""/>
                </div>
            </div>
            </div>
           
        </section>
    );
};

export default Clients;