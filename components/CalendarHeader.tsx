import React, { useState } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const CalendarHeader = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState('All events');

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow mb-6 mt-4 w-full flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <select value={selectedEvent} onChange={handleEventChange} className="bg-gray-100 dark:bg-gray-700 border rounded-md px-4 py-2">
                    <option value="All events">All events</option>
                    <option value="School day">School day</option>
                    <option value="Holiday">Holiday</option>
                </select>
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{format(currentDate, 'MMMM yyyy')}</h2>
                <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="search"
                    placeholder="Search events"
                    className="px-4 py-2 w-64 text-sm bg-gray-100 dark:bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md flex items-center">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                </button>
            </div>
        </div>
    );
};

export default CalendarHeader;