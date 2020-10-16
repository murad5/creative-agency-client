import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceList from '../ServiceList/ServiceList';

import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <div className="row">
                <div className="col-md-6">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6">
                    <ServiceList></ServiceList>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;