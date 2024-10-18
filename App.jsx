import React, { useState } from 'react';
import EmployeeList from './Components/EmployeeList'
import EmployeeForm from './Components/EmployeeForm'

function App() {
  const [employees, setEmployees] = useState([]);

  // Add new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="container mx-auto p-8 bg-slate-300">
      <h1 className="text-3xl font-bold mb-4 text-center bg-slate-500">Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
