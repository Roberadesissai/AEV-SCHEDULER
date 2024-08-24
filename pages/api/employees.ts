// pages/api/employees.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json([{ id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password123' }]);
    } else if (req.method === 'POST') {
        // Handle POST request
        const { firstName, lastName, email, password } = req.body;
        // Here you would typically save the employee to a database
        res.status(201).json({ message: 'Employee added successfully' });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}