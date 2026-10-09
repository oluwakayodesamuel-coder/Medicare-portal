/* ==================================================================
   DEVELOPER 5 · PATIENT STATISTICS
   File: js/05-statistics.js          (you edit ONLY this file)

   YOUR JOB
   Count the patients and show the numbers at the top of the page, in:
     #total-patients   #active-patients   #inactive-patients
   (#total-appointments belongs to Developer 6.)

   WHO USES YOUR WORK
   Developer 10 calls renderStatistics() when the page starts, and
   Developer 8 calls it again after registering a patient, so the numbers
   must always be counted fresh from the `patients` array, never typed in.

   CONCEPTS: loops, variables, conditionals, operators (++ and -)
   ================================================================== */

// STEP 1. countActivePatients(list): start a counter at 0, loop over list,
//         and add 1 (counter++) for every patient whose status is "Active".
//         Return the counter.
function countActivePatients(list) {
  return 0; // <- replace with your loop
}

// STEP 2. renderStatistics():
//         total    = patients.length
//         active   = countActivePatients(patients)
//         inactive = total - active
//         Put each number in its box, for example:
//         document.getElementById("total-patients").textContent = total;
function renderStatistics() {
}

// STEP 3. Check: with all 20 patients the page shows 20, 15 and 5.
