import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div className="row my-5 mb-5 pb-2 text-md-left text-center ">
            <div className="col-md-5 col-sm-12 my-5">
                <h1>Let’s Grow Your <br/>
                    Brand To The <br/>
                    Next Level</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore voluptates optio itaque ab nisi enim voluptate ipsam? Quisquam exercitationem iure id distinctio culpa incidunt quis. Fuga quaerat blanditiis provident?</p>   
                 <button style={{width:'150px'}}  className="btn btn-dark">Hire Us</button>
           
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="img-fluid mb-5 pb-2 "  src={frame} alt=""/>
            </div>
            
        </div>
    );
};

export default HeaderMain;