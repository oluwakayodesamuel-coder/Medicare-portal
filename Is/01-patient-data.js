/* ==================================================================
   DEVELOPER 1 · PATIENT DATA
   File: js/01-patient-data.js        (you edit ONLY this file)

   YOUR JOB
   Turn Medicare's patient records into JavaScript. The records are in
   data/patients.csv (download it from Resources in the Pod Office).
   Every row becomes one object inside the `patients` array.

   WHO USES YOUR WORK
   Almost everybody. Developers 2, 3, 4, 5, 8 and 9 all read `patients`.
   So the property names below must be EXACTLY these, spelt the same way:
     id (number)   name (text)   age (number)   gender (text)
     phone (text)  bloodGroup (text)   status ("Active" or "Inactive")

   CONCEPTS: variables, arrays, objects, data types
   ================================================================== */

// STEP 1. Here is patient 1, done for you, so you can see the shape.
// STEP 2. Add patients 2 to 20 from data/patients.csv the same way.
//         Numbers have NO quotes (age: 32). Text HAS quotes (name: "John Ade").
//         Put a comma after every object except the last one.
// STEP 3. Save, open index.html in your browser, press F12 > Console and type:
//         patients.length      (it should say 20)
//         patients[19].name    (it should say "Grace Etim")

const patients = [
  {
    id: 1,
    name: "John Ade",
    age: 32,
    gender: "Male",
    phone: "0803 412 7781",
    bloodGroup: "O+",
    status: "Active"
  }
  // , { id: 2, name: "Sarah Bello", ... }   <- carry on from here
];
