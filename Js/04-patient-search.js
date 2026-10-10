function searchPatients() {
   // Step 1: Read the search box and convert to lowercase
  const typed = document.getElementById("searchBox").value.toLowerCase().trim();

  // Step 2: Find patients whose names contain the typed text
  const results = patients.filter(function (patient) {
    return patient.name.toLowerCase().includes(typed);
  });

  // Step 3: Display the matching patients
  renderPatientList(results);

  // Step 4: Display the appropriate message
  const message = document.getElementById("search-message");

  if (typed === "") {
    message.textContent = "";
  } else if (results.length === 0) {
    message.textContent = `No patient matches "${typed}".`;
  } else {
    message.textContent = `${results.length} patient(s) found.`;
  }
}
