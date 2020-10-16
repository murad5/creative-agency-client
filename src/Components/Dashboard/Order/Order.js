import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const Order = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const history = useHistory();

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service/' + id)
            .then(res => res.json())
            .then(result => setService(result))

    }, [id]);

    const handleBlur = (e) => {
        loggedInUser[e.target.name] = e.target.value;

    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {

        const activities = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            date: loggedInUser.date,
            description: service.description,
            service: service.title,
            image: service.image,
            price: loggedInUser.price,
            status: 'Pending'
        }

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(activities)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    history.push("/orderList")
                }
               
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
        
            <form className="bg-white p-3" style={{borderRadius:'10px'}} onSubmit={handleSubmit}  >
                <div className="form-group">
                  
                    <input type="text" className="form-control" name="name" defaultValue={loggedInUser.name} placeholder="Your Name / Company's Name" />
                </div>
                <div className="form-group">
                  
                    <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} placeholder="Your Email" />
                </div>
                <div className="form-group">
                  
                    <input type="text" className="form-control" name="service" defaultValue={service.title} placeholder="Service" />
                </div>
                <div className="form-group">
                  
                    <textarea type="text" className="form-control" name="details" defaultValue={service.description}  placeholder="Project Details" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" onBlur={handleBlur} name="price" placeholder="Price" />
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