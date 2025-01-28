// script.js
document.addEventListener("DOMContentLoaded", function () {
    const salaryInput = document.getElementById("salary");
    const leaveDaysInput = document.getElementById("leaveDays");
    const finalSalarySpan = document.getElementById("finalSalary");
    const resultDiv = document.getElementById("result");

    function calculateSalary() {
        const salary = parseFloat(salaryInput.value) || 0;
        const leaveDays = parseInt(leaveDaysInput.value) || 0;

        if (salary < 0 || leaveDays < 0) {
            finalSalarySpan.textContent = "0.00";
            resultDiv.classList.remove("visible");
            return;
        }

        const dailyRate = salary / 30; // Assuming 30 days in a month
        const deduction = dailyRate * leaveDays;
        const finalSalary = salary - deduction;

        finalSalarySpan.textContent = finalSalary.toFixed(2);
        resultDiv.classList.add("visible");
    }

    salaryInput.addEventListener("input", calculateSalary);
    leaveDaysInput.addEventListener("input", calculateSalary);
});
