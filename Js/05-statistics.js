/* ==================================================================
   DEVELOPER 5 · PATIENT STATISTICS
   File: Js/05-statistics.js
   ================================================================== */

// Count the number of active patients
function countActivePatients(list) {
  let counter = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].status === "Active") {
      counter++;
    }
  }

  return counter;
}

// Display total, active, and inactive patients
function renderStatistics() {
  const total = patients.length;
  const active = countActivePatients(patients);
  const inactive = total - active;

  document.getElementById("total-patients").textContent = total;
  document.getElementById("active-patients").textContent = active;
  document.getElementById("inactive-patients").textContent = inactive;
}
