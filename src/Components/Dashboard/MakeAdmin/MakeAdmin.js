import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [makeAdmin, setMakeAdmin] = useState({})
    const history = useHistory();

       const handleSubmit= (e) => {

        const adminEmail = {
            email: makeAdmin.email
        }
        
         console.log(adminEmail);
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminEmail)
        })
            .then(res => res.json())
            .then(data => {
                history.push("/makeAAdmin")
            })
         
            e.preventDefault()
       }

       const handleBlur = (e) => {

        const newInfo = { ...makeAdmin};
        newInfo[e.target.name] = e.target.value;
        setMakeAdmin(newInfo);
      
       }


    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 px-5 my-5">
                <h5>Make Admin</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email</label>
                        <input onBlur={handleBlur} type="email" name="email" className="form-control" placeholder="Enter Email"/>

                    </div>
                   
                     <div className="col-md-2 mt-4 p-2">
                         <button type="submit"  className="btn btn-success">Submit</button>
                     </div>
                </div>
            </form>
            </div>
        </section>
    );
};

export default MakeAdmin;