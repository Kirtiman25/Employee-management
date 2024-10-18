import React from 'react';

function EmployeeDetails({ employee }) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-lg font-bold">{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
    </div>
  );
}

export default EmployeeDetails;
