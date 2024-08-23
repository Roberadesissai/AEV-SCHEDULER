"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClipboardList, PlusCircle, Users, ChevronDown, Edit3, Trash2, Settings } from "lucide-react";
import EmployerLayout from '@/layouts/EmployerLayout';

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", assignedTo: "John Doe", status: "In Progress" },
    { id: 2, name: "Mobile App Launch", assignedTo: "Sarah Smith", status: "Completed" },
  ]);

  const [newProjectName, setNewProjectName] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [activeTab, setActiveTab] = useState('view');

  const handleAddProject = () => {
    if (newProjectName && assignedUser) {
      setProjects([...projects, { id: projects.length + 1, name: newProjectName, assignedTo: assignedUser, status }]);
      setNewProjectName("");
      setAssignedUser("");
    }
  };

  return (
    <EmployerLayout>
      <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg mb-6 text-white">
          <h1 className="text-3xl font-bold">Projects Dashboard</h1>
          <p>Manage your projects effectively.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 -mb-px text-sm font-semibold text-gray-600 mt-4">
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'view' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('view')}>View Projects</button>
          <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'add' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('add')}>Add Project</button>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'add' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Add New Project</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                placeholder="Project Name"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Assign to"
                value={assignedUser}
                onChange={(e) => setAssignedUser(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleAddProject}>
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Project
            </button>
          </div>
        )}

        {activeTab === 'view' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Project List</h2>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {projects.map((project) => (
                <li key={project.id} className="py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <ClipboardList className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{project.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Assigned to: {project.assignedTo}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === "Completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                    {project.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </EmployerLayout>
  );
}
