// script.js
document.addEventListener("DOMContentLoaded", function () {
    const employeeForm = document.getElementById("employeeForm");
    const employeeTable = document.getElementById("employeeTable").querySelector("tbody");
    const addEmployeeButton = document.getElementById("addEmployee");

    // Function to calculate deductions
    function calculateDeductions(salary, leaveDays, pfPercent, k401Percent) {
        const dailyRate = salary / 30; // Assuming 30 days in a month
        const leaveDeduction = dailyRate * leaveDays;
        const pfDeduction = (pfPercent / 100) * salary;
        const k401Deduction = (k401Percent / 100) * salary;
        const netSalary = salary - leaveDeduction - pfDeduction;

        return { leaveDeduction, pfDeduction, k401Deduction, netSalary };
    }

    // Function to add an employee to the table
    function addEmployee() {
        const name = document.getElementById("name").value;
        const salary = parseFloat(document.getElementById("salary").value);
        const leaveDays = parseInt(document.getElementById("leaveDays").value);
        const pfPercent = parseFloat(document.getElementById("pf").value);
        const k401Percent = parseFloat(document.getElementById("k401").value);

        if (!name || isNaN(salary) || isNaN(leaveDays) || isNaN(pfPercent) || isNaN(k401Percent)) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const { leaveDeduction, pfDeduction, k401Deduction, netSalary } =
            calculateDeductions(salary, leaveDays, pfPercent, k401Percent);

        const row = `
            <tr>
                <td>${name}</td>
                <td>$${salary.toFixed(2)}</td>
                <td>$${leaveDeduction.toFixed(2)}</td>
                <td>$${pfDeduction.toFixed(2)}</td>
                <td>$${k401Deduction.toFixed(2)}</td>
                <td>$${netSalary.toFixed(2)}</td>
            </tr>
        `;

        employeeTable.innerHTML += row;
        employeeForm.reset();
    }

    // Event Listener
    addEmployeeButton.addEventListener("click", addEmployee);
});
