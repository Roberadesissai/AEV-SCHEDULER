"use client";

import React, { useState } from "react";
import { format, startOfMonth, addDays, isWeekend } from 'date-fns';
import EmployerLayout from '@/layouts/EmployerLayout';

const SchedulerApp = () => {
    const [employees, setEmployees] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [hours, setHours] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const currentDate = new Date();
    const startDay = startOfMonth(currentDate);
    const daysArray = Array.from(Array(31).keys()).map(day => addDays(startDay, day));

    const handleAddEmployeeSchedule = () => {
        if (firstName && lastName && hours && selectedDate) {
            setEmployees([...employees, { firstName, lastName, hours, date: selectedDate }]);
            setFirstName('');
            setLastName('');
            setHours('');
            setSelectedDate(new Date());
        }
    };

    const renderCalendarDays = () => {
        return daysArray.map((day, index) => (
            <div key={index} className={`p-4 border rounded-lg ${isWeekend(day) ? 'bg-gray-200' : 'bg-white'} shadow-sm`}>
                <div className="font-bold">{format(day, 'EEEE, do MMMM')}</div>
                {employees.filter(emp => format(emp.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
                    .map((emp, idx) => (
                        <div key={idx} className="mt-2 text-sm">
                            <p>{emp.firstName} {emp.lastName} - {emp.hours} hrs</p>
                        </div>
                    ))
                }
            </div>
        ));
    };

    return (
        <EmployerLayout>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Employee Scheduler</h1>

                <div className="flex flex-wrap gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="number"
                        placeholder="Working Hours"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="date"
                        value={format(selectedDate, 'yyyy-MM-dd')}
                        onChange={(e) => setSelectedDate(new Date(e.target.value))}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                        onClick={handleAddEmployeeSchedule}
                        className="p-2 bg-blue-500 text-white rounded-lg"
                    >
                        Add Schedule
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-4">
                    {renderCalendarDays()}
                </div>
            </div>
        </EmployerLayout>
    );
};

export default SchedulerApp;
