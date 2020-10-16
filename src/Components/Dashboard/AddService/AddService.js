import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="row text-md-left text-center ">
            
            <div className="col-md-2 col-sm-12">
                 <Sidebar></Sidebar>
            </div>
             
            <div className="col-md-10 col-sm-12 p-4 pr-5 ">

              <div className=" d-flex justify-content-between p-2" >
                        <h5 className="text-brand">Add Service</h5>
                    <h6> <img style={{height:'40px', width:'40px', borderRadius:'50%'}} src={loggedInUser.photo} alt=""/> {loggedInUser.name}</h6>
                </div>
                <div style={{backgroundColor: " #E5E5E5" ,padding: '20px',height:'600px',}} >
                <form className="bg-white p-3" style={{borderRadius:'10px'}}  onSubmit={handleSubmit}>
                    <div className="row col-md-12">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                        </div>
                        <div className="col mt-2 p-2">
                            <input type="file" onChange={handleFileChange} id="upload-btn"  hidden/>
                            <label className='upload' htmlFor="upload-btn"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea onBlur={handleBlur} cols="5" rows="5"type="text" className="form-control" name="description" placeholder="Enter Description" />
                    </div>
                    
 
                    <div className="d-flex justify-content-end">
                         <button type="submit" className="btn btn-success mt-1 ">Submit</button>
                    </div>
                    
                </form>
                </div>
                
            </div>
            
        </section>
    );
};

export default AddService;