// Dummy data
let employees = [
    { id: 1, name: 'John Doe', department: 'HR', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', department: 'IT', phone: '234-567-8901', address: '456 Elm St' },
    { id: 4, name: 'Bob Brown', department: 'Marketing', phone: '456-789-0123', address: '456 Pine St' },
    { id: 5, name: 'Emma Davis', department: 'HR', phone: '567-890-1234', address: '789 Cedar St' },
    { id: 6, name: 'Michael Wilson', department: 'IT', phone: '678-901-2345', address: '123 Maple St' },
    { id: 7, name: 'Sophia Garcia', department: 'Finance', phone: '789-012-3456', address: '456 Oak St' },
    { id: 8, name: 'Matthew Rodriguez', department: 'Marketing', phone: '890-123-4567', address: '789 Pine St' },
    { id: 9, name: 'Olivia Martinez', department: 'HR', phone: '901-234-5678', address: '123 Cedar St' },
    { id: 10, name: 'William Hernandez', department: 'IT', phone: '012-345-6789', address: '456 Maple St' },
    { id: 11, name: 'Isabella Lopez', department: 'Finance', phone: '123-456-7890', address: '789 Oak St' },
    { id: 12, name: 'James Gonzalez', department: 'Marketing', phone: '234-567-8901', address: '456 Pine St' },
    { id: 13, name: 'Emily Wilson', department: 'HR', phone: '345-678-9012', address: '123 Cedar St' },
    { id: 14, name: 'Alexander Perez', department: 'IT', phone: '456-789-0123', address: '789 Maple St' },
    { id: 15, name: 'Charlotte Turner', department: 'Finance', phone: '567-890-1234', address: '456 Oak St' },
    { id: 16, name: 'Daniel Cook', department: 'Marketing', phone: '678-901-2345', address: '789 Pine St' },
    { id: 17, name: 'Scarlett Ward', department: 'HR', phone: '789-012-3456', address: '123 Main St' },
    { id: 18, name: 'Benjamin Foster', department: 'IT', phone: '890-123-4567', address: '456 Elm St' },
    { id: 19, name: 'Mia Powell', department: 'Finance', phone: '901-234-5678', address: '789 Oak St' },
    { id: 20, name: 'Henry Long', department: 'Marketing', phone: '012-345-6789', address: '123 Pine St' },
    { id: 3, name: 'Alice Johnson', department: 'Finance', phone: '345-678-9012', address: '789 Oak St' }
    // Add more employees as needed
];

// Function to render employee list
function renderEmployeeList(employeesToRender) {
    const infoBody = document.getElementById('info-body');
    infoBody.innerHTML = '';

    employeesToRender.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.address}</td>
            <td>${employee.phone}</td>
            <td>${employee.id}</td>
            <td>
                <button class="edit-action" onclick="editEmployee(${employee.id})">Edit</button>
                <button class="delete-action" onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;
        infoBody.appendChild(row);
    });
}

// Function to edit employee information
function editEmployee(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    const newName = prompt('Enter new name:', employee.name);
    if (newName !== null) {
        employee.name = newName;
        renderEmployeeList(employees);
    }
}

// Function to delete employee
function deleteEmployee(employeeId) {
    const confirmDelete = confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
        employees = employees.filter(emp => emp.id !== employeeId);
        renderEmployeeList(employees);
    }
}

// Function to search employees
function search() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchInput) ||
        employee.department.toLowerCase().includes(searchInput) ||
        employee.address.toLowerCase().includes(searchInput) ||
        employee.phone.includes(searchInput) ||
        employee.id.toString().includes(searchInput)
    );
    renderEmployeeList(filteredEmployees);
}

// Initial rendering
renderEmployeeList(employees);
