/* ==================================================================
   DEVELOPER 3 · PATIENT SEARCH
   File: js/04-patient-search.js      (you edit ONLY this file)

   YOUR JOB
   When staff type in the search box, show only the patients whose name
   contains what they typed. "jo" should find John Ade.

   HOW IT RUNS
   index.html already has:  <input id="searchBox" oninput="searchPatients()">
   oninput means: every time the text changes, the browser calls
   searchPatients(). You only write the function.

   YOU USE: `patients` (Developer 1) and renderPatientList(list) (Developer 2).
   You write messages into the paragraph with id="search-message".

   CONCEPTS: variables, array methods (filter, includes), functions,
             DOM, conditionals
   ================================================================== */

function searchPatients() {
  // STEP 1. Read what was typed and make it lower case so "JOHN" finds John:
  //         const typed = document.getElementById("searchBox").value.toLowerCase();

  // STEP 2. Keep the matching patients with filter():
  //         const results = patients.filter(function (patient) {
  //           return patient.name.toLowerCase().includes(typed);
  //         });

  // STEP 3. Show them:  renderPatientList(results);

  // STEP 4. Write a message into #search-message with if / else if / else:
  //         typed is empty         -> ""   (clear the message)
  //         results.length === 0   -> `No patient matches "${typed}".`
  //         otherwise              -> `${results.length} patient(s) found.`
}
