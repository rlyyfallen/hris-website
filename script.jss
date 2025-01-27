// script.js
document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const salary = parseFloat(document.getElementById("salary").value);
    const leaveDays = parseInt(document.getElementById("leaveDays").value);
    
    if (isNaN(salary) || isNaN(leaveDays)) {
        alert("Please enter valid numbers.");
        return;
    }
    
    const dailyRate = salary / 30;  // Assuming 30 days in a month
    const deduction = dailyRate * leaveDays;
    const finalSalary = salary - deduction;
    
    document.getElementById("finalSalary").textContent = finalSalary.toFixed(2);
    document.getElementById("result").style.visibility = "visible";
});
