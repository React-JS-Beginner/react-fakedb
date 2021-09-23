import React from 'react';
import { addToLocalStorage, removeCall } from '../../utilities/storage';
import './Employee.css';

const Employee = (props) => {

    const {index, name, gender, company, phone, email} = props.employee;

    const callThem = id => {
        console.log(id); //Test
        addToLocalStorage(id);
    }

    const removeTheirCall = id => {
        console.log(id);
        removeCall(id);
    }

    return (
        <div className="details">
            <p><strong>Rank :</strong> &nbsp;<span style={{color:'brown', fontSize:'20px', fontWeight:"bold"}}>( {index} )</span></p>
            <p><strong>Name :</strong> &nbsp;{name}</p>
            <p><strong>Gender :</strong> &nbsp;{gender}</p>
            <p><strong>Company :</strong> &nbsp;{company}</p>
            <p><strong>Phone :</strong> &nbsp;{phone}</p>
            <p><strong>Email :</strong> &nbsp;{email}</p>

            <div className='btn'>
            <button onClick={() => callThem(index)} >Call Now</button>
            <button onClick={() => removeTheirCall(index)} >Reject</button>
            </div>

        </div>
    );
};

export default Employee;