import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleForm: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" />
            </div>
            {/* Additional form inputs */}
        </form>
    );
};

export default ScheduleForm;
