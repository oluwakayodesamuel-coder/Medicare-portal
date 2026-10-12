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
  // STEP 1: Find the table body
  const tableBody = document.getElementById("patient-list");

  // STEP 2: Create an empty string to collect rows
  let rows = "";

  // STEP 3: Loop through the list of patients
  for (const patient of list) {
    rows += `<tr>
      <td>${patient.name}</td>
      <td>${patient.age}</td>
      <td>${patient.gender}</td>
      <td>
        <span class="badge ${getStatusClass(patient)}">
          ${getStatusText(patient)}
        </span>
      </td>
      <td>
        <button
          type="button"
          class="btn-small"
          onclick="showPatientById(${patient.id})">
          View
        </button>
      </td>
    </tr>`;
  }

  // STEP 4: Handle an empty list
  if (list.length === 0) {
    rows = `<tr>
      <td colspan="5" class="empty">No patients found.</td>
    </tr>`;
  }

  // STEP 5: Display the rows on the page
  tableBody.innerHTML = rows;
}

