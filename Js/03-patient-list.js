/* ==================================================================
   DEVELOPER 2 · PATIENT LIST
   File: js/03-patient-list.js        (you edit ONLY this file)

   YOUR JOB
   Show patients in the table. The table body has id="patient-list"
   in index.html. You build one <tr> row per patient with a LOOP and put
   all the rows into the page.

   WHO USES YOUR WORK
   renderPatientList(list) is called with DIFFERENT lists:
     Developer 10 calls it with all patients when the page starts,
     Developer 3 calls it with only the search results,
     Developer 8 calls it again after a new patient is registered.
   So always loop over `list` (the parameter), never over `patients` directly.

   YOU USE: getStatusText(patient) and getStatusClass(patient) from Developer 4.

   CONCEPTS: DOM, loops, arrays, objects, functions
   ================================================================== */

function renderPatientList(list) {
  // STEP 1. Find the table body:
  //         const tableBody = document.getElementById("patient-list");

  // STEP 2. Make an empty text variable to collect rows:  let rows = "";

  // STEP 3. Loop over list (for (const patient of list) { ... }) and add one row:
  //   rows += `<tr>
  //     <td>${patient.name}</td>
  //     <td>${patient.age}</td>
  //     <td>${patient.gender}</td>
  //     <td><span class="badge ${getStatusClass(patient)}">${getStatusText(patient)}</span></td>
  //     <td><button type="button" class="btn-small" onclick="showPatientById(${patient.id})">View</button></td>
  //   </tr>`;
  //   (The View button calls Developer 9's function with this patient's id.)

  // STEP 4. If list.length === 0, set rows to one row that says "No patients found."
  //         <tr><td colspan="5" class="empty">No patients found.</td></tr>

  // STEP 5. Put the rows on the page:  tableBody.innerHTML = rows;
}
