import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css'

const Employees = () => {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        fetch('./employees.json')
        .then(res => res.json())
        .then(data => setEmployees(data))
        // .then(data => console.log(data)) //Test

    },[])

    return (
        <div>
            <h1>JOB HOLDERS</h1>
            <p style={{textAlign:'center'}}>Check The Call History In Local Storage</p>

            <div className="employees"> 
            {
                employees.map(employee => <Employee 
                    key={employee.index}
                    employee={employee}
                    ></Employee>)
            }
            </div>
        </div>
    );
};

export default Employees;