import React, { useState } from 'react';
import { Calendar, Clock, Save } from 'lucide-react';

const EditSchedule = () => {
    const [eventType, setEventType] = useState('School day');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');

    const handleSave = () => {
        console.log('Schedule saved:', { eventType, date, time, notes });
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Change Schedule</h2>
            <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800 dark:text-white">Event Type</label>
                    <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none text-gray-800 dark:text-white"
                    >
                        <option value="School day">School day</option>
                        <option value="Holiday">Holiday</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800 dark:text-white">Date</label>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-800 dark:text-white" />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none text-gray-800 dark:text-white"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800 dark:text-white">Time</label>
                    <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-gray-800 dark:text-white" />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none text-gray-800 dark:text-white"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800 dark:text-white">Notes</label>
                    <textarea
                        placeholder="Add notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none text-gray-800 dark:text-white"
                    />
                </div>
            </div>
            <button
                onClick={handleSave}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
                <Save className="w-5 h-5 mr-2" />
                Save Schedule
            </button>
        </div>
    );
};

export default EditSchedule;