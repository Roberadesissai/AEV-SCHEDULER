"use client";

import React, { useState } from "react";
import EmployerLayout from '@/layouts/EmployerLayout';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { format, startOfMonth, addDays, isToday } from 'date-fns'; // Ensure to install date-fns library
import CalendarHeader from "@/components/CalendarHeader";
import EditSchedule from "@/components/EditSchedule";

const Calendar: React.FC = () => {
    const [activeTab, setActiveTab] = useState('view');
    const [currentDate, setCurrentDate] = useState(new Date());
    const startDay = startOfMonth(currentDate);
    const daysArray = Array.from(Array(31).keys()).map(day => addDays(startDay, day));

    return (
        <EmployerLayout>
            <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
                {/* Original Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg mb-6 text-white w-full">
                    <h1 className="text-3xl font-bold">Calendar</h1>
                    <p>Manage your schedule effectively.</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex space-x-4 -mb-px text-sm font-semibold text-gray-600 mt-4">
                    <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'view' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('view')}>View Calendar</button>
                    <button className={`tabs focus:outline-none py-4 px-1 border-b-2 ${activeTab === 'edit' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-800'}`} onClick={() => setActiveTab('edit')}>Edit Schedule</button>
                </div>
                <hr className="my-1 border-b border-gray-200 dark:border-gray-700" />

                {activeTab === 'view' && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6 mt-8 w-full">
                        <CalendarHeader />

                        <div className="calendar-grid mt-8 grid grid-cols-7 gap-4">
                            {daysArray.map((day, index) => (
                                <Card key={index} className="relative">
                                    <CardHeader className="text-sm flex justify-between">
                                        <div className="text-left">
                                            <span className="font-bold">{format(day, 'iii')}</span>
                                            <span className="block">{format(day, 'do')}</span>
                                        </div>
                                        {isToday(day) && <span className="text-xs font-bold text-blue-500 absolute top-5 right-0 m-5">Today</span>}
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>Event details for {format(day, 'MMMM do')}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'edit' && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full mt-8">
                        <div className="bg-gray-900 p-5 rounded-lg mb-6 mt-5 text-white">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Edit Schedule</h2>
                            <p>Change your schedule effectively.</p>
                        </div>
                        <EditSchedule />
                    </div>
                )}
            </div>
        </EmployerLayout>
    );
};

export default Calendar;
