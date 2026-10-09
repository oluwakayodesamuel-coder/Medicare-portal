/* ==================================================================
   DEVELOPER 9 · PATIENT PROFILE
   File: js/09-patient-profile.js     (you edit ONLY this file)

   YOUR JOB
   Show one patient's full details in the box with id="patient-profile".

   WHO USES YOUR WORK
     The "View" button on every row (Developer 2) calls showPatientById(id).
     Developer 8 calls showPatient(newPatient) after registering someone.

   YOU USE: patients (Dev 1), getStatusText / getStatusClass (Dev 4).

   CONCEPTS: functions, parameters, objects, array method find, DOM
   ================================================================== */

// STEP 1. showPatient(patient): build the profile and put it on the page.
//   document.getElementById("patient-profile").innerHTML = `
//     <div class="profile">
//       <h3>${patient.name}</h3>
//       <dl>
//         <dt>Patient ID</dt><dd>#${patient.id}</dd>
//         <dt>Age</dt><dd>${patient.age}</dd>
//         ... gender, phone, blood group ...
//         <dt>Status</dt><dd><span class="badge ${getStatusClass(patient)}">${getStatusText(patient)}</span></dd>
//       </dl>
//     </div>`;
function showPatient(patient) {
}

// STEP 2. showPatientById(id): find the patient with that id and show them.
//   const patient = patients.find(function (p) { return p.id === id; });
//   If no patient is found (patient === undefined), write
//   "Patient not found." into #patient-profile. Otherwise showPatient(patient).
function showPatientById(id) {
}
