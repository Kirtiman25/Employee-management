import React from 'react';

function EmployeeList({ employees }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      {employees.length === 0 ? (
        <p className="text-gray-500">No employees added yet.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2">{employee.email}</td>
                <td className="border px-4 py-2">{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
