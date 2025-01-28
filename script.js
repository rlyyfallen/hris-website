document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("employeeTable");

  document.getElementById("addEmployee").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const leaveDays = parseFloat(document.getElementById("leaveDays").value);
    const pfPercent = parseFloat(document.getElementById("pf").value);
    const k401Percent = parseFloat(document.getElementById("k401").value);

    const dailyRate = salary / 30;
    const leaveDeduction = leaveDays * dailyRate;
    const pfDeduction = (pfPercent / 100) * salary;
    const k401Contribution = (k401Percent / 100) * salary;
    const netSalary = salary - leaveDeduction - pfDeduction - k401Contribution;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${salary.toFixed(2)}</td>
      <td>${leaveDeduction.toFixed(2)}</td>
      <td>${pfDeduction.toFixed(2)}</td>
      <td>${k401Contribution.toFixed(2)}</td>
      <td>${netSalary.toFixed(2)}</td>
      <td><canvas id="chart-${name}"></canvas></td>
    `;
    tableBody.appendChild(row);

    const ctx = document.getElementById(`chart-${name}`).getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Net Salary", "Leave Deduction", "PF", "401(k)"],
        datasets: [
          {
            data: [netSalary, leaveDeduction, pfDeduction, k401Contribution],
            backgroundColor: ["#4caf50", "#f44336", "#2196f3", "#ff9800"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  });
});
