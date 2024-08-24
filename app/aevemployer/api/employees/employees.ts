// pages/api/employees.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Mock data for demonstration
        res.status(200).json([{ id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password123' }]);
    } else if (req.method === 'POST') {
        // Handle POST request
        const { firstName, lastName, email, password } = req.body;
        // Normally, save the employee data to a database here
        res.status(201).json({ message: 'Employee added successfully' });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}