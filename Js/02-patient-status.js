/* ==================================================================
   DEVELOPER 4 · PATIENT STATUS
   File: js/02-patient-status.js      (you edit ONLY this file)

   YOUR JOB
   Decide how a patient's status is shown. You write two small functions.
   They take ONE patient object and RETURN a value (they do not touch the page).

   WHO USES YOUR WORK
   Developer 2 (the patient list) and Developer 9 (the profile) call:
     getStatusText(patient)   ->  "Active" or "Inactive"
     getStatusClass(patient)  ->  "status-active" or "status-inactive"
   The class names already have colours in css/style.css (green and red).

   CONCEPTS: conditionals, ternary operator, comparison operators, objects
   ================================================================== */

// STEP 1. getStatusText: use a TERNARY.
//         If patient.status === "Active" return "Active", otherwise "Inactive".
//         (So a typo like "active" in the data still shows as Inactive. Note
//         that in your documentation if you spot one.)
function getStatusText(patient) {
  return patient.status === "Active" ? "Active" : "Inactive"; // <- replace this line with your ternary
}



// STEP 2. getStatusClass: use an IF / ELSE.
//         "Active" -> "status-active", anything else -> "status-inactive".

function getStatusClass(patient) {
    if (patient.status === "Active") {
      return "status-active";
  } else {
      return "status-inactive";
  }
  
}



// STEP 3. Test in the Console (F12):
//         getStatusText(patients[0])     -> "Active"
//         getStatusClass(patients[2])    -> "status-inactive"  (David James)

getStatusText(patients[0]);
getStatusClass(patients[2]);