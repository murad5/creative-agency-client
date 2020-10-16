import React from 'react';
import './Reviews.css'

const Review = ({review}) => {

    return (

        <div  className=" col-md-4" >

        <div className="card shadow-sm mb-5 ">
        <div className="card-header d-flex ">
            {
                review.image.img?
                <img className="mx-3 " src={`data:image/png;base64,${review.image.img}`} alt="" width="60"/>
                :
                <img className="mx-3 " src={review.image} alt="" height="60" style={{borderRadius: '50%'}}  width="60"/>
            }
            <div>
                <h6 >{review.name}</h6>
                <p style={{color:'black'}}>{review.designation}</p>
            </div>
            </div>
           
        <div className="card-body text-justify">
            <p className="card-text text-secondary">{review.description}</p>
        </div>
            
       </div>
        </div>




       
        
 


    );
};

export default Review;