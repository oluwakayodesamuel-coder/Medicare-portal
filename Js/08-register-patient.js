/* ==================================================================
   DEVELOPER 8 · PATIENT REGISTRATION
   File: js/08-register-patient.js    (you edit ONLY this file)

   YOUR JOB
   When staff press "Register patient", read the form, check it, build a
   new patient object, add it to `patients` and refresh the page.

   HOW IT RUNS
   index.html already has:
     <button type="button" onclick="registerPatient()">Register patient</button>
   The inputs are #reg-name, #reg-age, #reg-gender, #reg-phone.
   Messages go in #register-message (add class "success" or "error").

   YOU USE: patients (Dev 1), renderPatientList (Dev 2),
            renderStatistics (Dev 5), showPatient (Dev 9).

   CONCEPTS: variables, data types (Number), objects, conditionals, DOM
   ================================================================== */

function registerPatient() {
  // STEP 1. Read the four values:
  //   const name = document.getElementById("reg-name").value.trim();
  //   const age = Number(document.getElementById("reg-age").value);
  //   (do the same for gender and phone)
  //   Note: .value is always TEXT. Number(...) turns "30" into 30.

  // STEP 2. Check them with if / else if. Stop with `return` if something is wrong:
  //   name === ""                     -> "Enter the patient's name."
  //   age <= 0 || age > 120           -> "Enter an age between 1 and 120."
  //   gender === ""                   -> "Choose a gender."
  //   Show the message in #register-message with className "message error".

  // STEP 3. Build the new patient (same property names as Developer 1):
  //   const newPatient = {
  //     id: patients.length + 1,
  //     name: name, age: age, gender: gender,
  //     phone: phone, bloodGroup: "Not recorded", status: "Active"
  //   };

  // STEP 4. Add it and refresh everyone's sections:
  //   patients.push(newPatient);
  //   renderPatientList(patients);
  //   renderStatistics();
  //   showPatient(newPatient);

  // STEP 5. Success message (className "message success"), e.g.
  //   `${name} is registered as patient #${newPatient.id}.`
  //   and empty the inputs:  document.getElementById("reg-name").value = "";
}
