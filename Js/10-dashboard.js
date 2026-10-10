/* ==================================================================
   DEVELOPER 10 · LEAD DEVELOPER (dashboard and integration)
   File: js/10-dashboard.js  + you own index.html and css/style.css

   YOUR JOB
   You are the pod leader. You create the GitHub repository, merge every
   pull request, keep the page working, and publish it on GitHub Pages.
   In code, you write the one function that starts the whole portal.
   This file loads LAST, so every other function already exists here.

   CONCEPTS: functions, DOM, calling other people's functions
   ================================================================== */

function startDashboard() {
  // STEP 1: Display your pod name in the header
  document.getElementById("built-by").textContent =
    "Built by Cascade Pod";

  // STEP 2: Start every section with the full data
  renderStatistics();
  renderPatientList(patients);
  renderAppointments(appointments);
  // STEP 3. After every merge, open the page, press F12 > Console.
  //   Red text means something broke: the file name and line number tell you
  //   whose part it is. Send them the message in the pod room.
}

// This line runs the portal. Leave it at the very bottom.
startDashboard();
