const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy data
let employees = [
    { id: 1, name: 'John Doe', department: 'HR', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', department: 'IT', phone: '234-567-8901', address: '456 Elm St' },
    { id: 3, name: 'Alice Johnson', department: 'Finance', phone: '345-678-9012', address: '789 Oak St' }
    // Add more employees as needed
];

// Get all employees
app.get('/api/employees', (req, res) => {
    res.json(employees);
});

// Get employee by ID
app.get('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

// Add new employee
app.post('/api/employees', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

// Update employee
app.put('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedEmployee = req.body;
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = updatedEmployee;
        res.json(updatedEmployee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

// Delete employee
app.delete('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        res.json({ message: 'Employee deleted successfully' });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
