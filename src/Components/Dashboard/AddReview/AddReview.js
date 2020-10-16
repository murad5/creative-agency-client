import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();

    console.log(loggedInUser)

    const handleBlur = (e) => {
        loggedInUser[e.target.name] = e.target.value;
    }

    const handleSubmit = (e) => {

        const review = {
            name: loggedInUser.name,
            designation: loggedInUser.designation,
            description: loggedInUser.description,
            image: loggedInUser.photo,
        }
        
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                history.push("/")
            })

        e.preventDefault()


    }
    return (
        <section className="container-fluid row">
            
            <div className="col-md-2 col-sm-12">
                 <Sidebar></Sidebar>
            </div>
             
            <div className="col-md-10 col-sm-12 p-4 pr-5 ">
                <h5 className="text-brand">Review</h5>
                <div style={{backgroundColor: " #E5E5E5" ,padding: '20px',height:'600px',}} >
                <form className="bg-white p-3" style={{borderRadius:'10px'}}  onSubmit={handleSubmit}>
                    <div className="form-group">
                      
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" defaultValue={loggedInUser.name} placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      
                        <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Company's name/Designation" />
                    </div>
                    <div className="form-group">
                      
                        <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                   
                    <div>
                    <button type="submit" className="btn btn-dark ">Submit</button>
                    </div>
                    
                </form>
                </div>
                
            </div>
            
        </section>
    );
};

export default AddService;