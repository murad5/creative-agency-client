import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {

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
        <section className="row">
            
            <div className="col-md-2 col-sm-12">
                 <Sidebar></Sidebar>
            </div>
             
            <div className="col-md-10 col-sm-12 p-4 pr-5 ">
                <h5 className="text-brand">Add Service</h5>
                <div style={{backgroundColor: " #E5E5E5" ,padding: '20px',height:'600px',}} >
                <form className="bg-white p-3" style={{borderRadius:'10px'}}  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Enter Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file-upload" >Icon</label>
                        <input className="form-control"  onChange={handleFileChange} id="file-upload" type="file" placeholder="icon" />
                       
                    </div>

                   
                    <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success ">Submit</button>
                    </div>
                    
                </form>
                </div>
                
            </div>
            
        </section>
    );
};

export default AddService;