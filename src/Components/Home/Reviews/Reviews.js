import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(result => setReviews(result))

    },[])
    return (
        <section className="reviews py-5 my-5 px-5">
             <div className="container">
                    <h2 className="text-center">Clients  <span style={{color:'#7AB259'}}>Feedback</span></h2>
                    {
                        reviews.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }

                    <div className=" row mt-5  ">
                       {
                           reviews.map((review=> <Review review={review} key={review._id}></Review>))
                       } 
                    </div>
            
           </div>
        </section>
    );
};

export default Reviews;