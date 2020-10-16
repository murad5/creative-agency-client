import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ServiceListDetails = (props) => {
    const [changeStatus, setChangeStatus] = useState(false);
    const {_id, name, email, service, description,status} =props.service

   
    return (
        <tr>
                    <td >{name}</td>
                    <td>{email}</td>
                    <td>{service}</td>
                    <td>{description}</td>
                    <td>
                    <DropdownButton variant='light'
                            alignRight
                            style={{color: 'red'}}
                            title={status}
                            id="dropdown-menu-align-right"
                            onSelect={(e)=>props.setStatus(e, _id)}
                                >
                                    <Dropdown.Item eventKey="On Going">On Going</Dropdown.Item>
                                    <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                                    <Dropdown.Item eventKey="Cancel">Cancel</Dropdown.Item>
                                   
                            </DropdownButton>
                    </td>
                    </tr>
                    
    );
};

export default ServiceListDetails;