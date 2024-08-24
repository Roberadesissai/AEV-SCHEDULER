const Database = require('better-sqlite3');
const db = new Database('./mydb.sqlite', { verbose: console.log });

// Run migrations or create tables
const createEmployeesTable = `
CREATE TABLE IF NOT EXISTS employees (
    id TEXT PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT
);
`;
db.exec(createEmployeesTable);

module.exports = db;
