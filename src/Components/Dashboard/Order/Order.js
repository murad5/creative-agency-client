import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './Order.css'


const Order = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [file, setFile] = useState(null);
    const history = useHistory();



    const handleBlur = (e) => {
        loggedInUser[e.target.name] = e.target.value;

    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
              
            const formData = new FormData()
            console.log(loggedInUser);
            formData.append('file', file);
            formData.append('name', loggedInUser.name);
            formData.append('email', loggedInUser.email);
            formData.append('title', loggedInUser.title);
            formData.append('description', loggedInUser.description);
            formData.append('price', loggedInUser.price);
            formData.append('status','pending')
    
            fetch('http://localhost:5000/addOrder', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if(data){
                        history.push('/orderList')
                    }
                })
                .catch(error => {
                    console.error(error)
                })    

        e.preventDefault()


    }


    return (
        <section className="container-fluid row mr-0 ml-0" >
            
        <div className="col-md-2 col-sm-6 " >
           
                 <Sidebar></Sidebar>

        </div>
       
        <div className="col-md-10 col-sm-12 pb-5 mr-0 ml-0 pt-3 " style={{backgroundColor: " #E5E5E5",height:'100%', width:'100%'}}>
                <div className=" d-flex justify-content-between p-2" >
                        <h5 className="text-brand">Order</h5>
                    <h6> <img style={{height:'40px', width:'40px', borderRadius:'50%'}} src={loggedInUser.photo} alt=""/> {loggedInUser.name}</h6>
                </div>
        
            <form className=" p-3 col-md-8" style={{borderRadius:'10px'}} onSubmit={handleSubmit}  >
                <div className="form-group">
                  
                    <input type="text" className="form-control" name="name" defaultValue={loggedInUser.name} placeholder="Your Name / Company's Name" />
                </div>
                <div className="form-group">
                  
                    <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} placeholder="Your Email" />
                </div>
                <div className="form-group">
                  
                    <input type="text" className="form-control" name="title" onBlur={handleBlur}  placeholder="Service" />
                </div>
                <div className="form-group">
                  
                    <textarea type="text" className="form-control" name="description" onBlur={handleBlur}   placeholder="Project Details" />
                </div>
               <div className="row">
                        <div className="col mt-2 pt-2">
                            <input type="text" className="form-control" onBlur={handleBlur} name="price" placeholder="Price" />
                        </div>
                        <div className="col mt-0 pt-0">
                            <input type="file" onChange={handleFileChange} id="upload-btn"  hidden/>
                            <label className='upload' htmlFor="upload-btn"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Project file</label>
                            
                        </div>
               </div>
                <div>
                <button type="submit" className="btn btn-dark ">Submit</button>
                </div>
                
            </form>
            
            
        </div>
        
    </section>
    );
};

export default Order;