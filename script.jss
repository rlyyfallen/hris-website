// script.js
document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from reloading

    const salary = parseFloat(document.getElementById("salary").value);
    const leaveDays = parseInt(document.getElementById("leaveDays").value);

    if (isNaN(salary) || isNaN(leaveDays) || salary < 0 || leaveDays < 0) {
        alert("Please enter valid and non-negative numbers.");
        return;
    }

    // Calculate salary deduction
    const dailyRate = salary / 30; // Assuming 30 days in a month
    const deduction = dailyRate * leaveDays;
    const finalSalary = salary - deduction;

    // Display the result
    document.getElementById("final
