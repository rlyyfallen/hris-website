document.addEventListener("DOMContentLoaded", () => {
  // Tab Navigation
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active classes
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to current tab
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Task Date Picker
  flatpickr("#taskDatePicker", {
    enableTime: false,
    dateFormat: "M d, Y",
  });
});
