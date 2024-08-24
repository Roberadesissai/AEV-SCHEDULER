"use client";

import React, { useState, useEffect } from "react";
import EmployerLayout from '@/layouts/EmployerLayout';
import { UserPlus, Edit3, Trash2 } from "lucide-react";
import axios from 'axios';

export default function Users() {
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState('view'); // Ensure this line is correctly defined

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get('/api/employees');
    setEmployees(response.data);
  };

  const handleAddEmployee = async () => {
    await axios.post('/api/employees', { firstName, lastName, email, password });
    fetchEmployees(); // Refresh the list
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <EmployerLayout>
      <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg mb-6 text-white">
          <h1 className="text-3xl font-bold">Manage Employees</h1>
          <p>Here you can view and manage your employees.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 -mb-px text-sm font-semibold text-gray-600 mt-4">
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'view' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('view')}>View Employees</button>
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'add' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('add')}>Add Employee</button>
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'edit' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('edit')}>Edit Employee</button>
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'delete' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('delete')}>Delete Employee</button>
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'search' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('search')}>Search Employee</button>
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'settings' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('settings')}>Settings</button>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'view' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Employee List</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Password</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{employee.firstName} {employee.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{employee.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{employee.password}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      <button className="text-blue-500 hover:text-blue-700 mr-2"><Edit3 className="w-5 h-5" /></button>
                      <button className="text-red-500 hover:text-red-700"><Trash2 className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Add New Employee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
            </div>
            <button
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white rounded-md hover:bg-green-600"
              onClick={handleAddEmployee}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Add Employee
            </button>
          </div>
        )}
      </main>
    </EmployerLayout>
  );
}