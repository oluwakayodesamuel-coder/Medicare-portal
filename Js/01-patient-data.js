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
  },
  {
    id: 2,
    name: "Sarah Bello",
    age: 27,
    gender: "Female",
    phone: "0812 556 0943",
    bloodGroup: "A+",
    status: "Active"
  },
  {
    id: 3,
    name: "David James",
    age: 41,
    gender: "Male",
    phone: "0705 228 6610",
    bloodGroup: "B+",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Amaka Okafor",
    age: 35,
    gender: "Female",
    phone: "0809 731 2254",
    bloodGroup: "O-",
    status: "Active"
  },
  {
    id: 5,
    name: "Ibrahim Musa",
    age: 58,
    gender: "Male",
    phone: "0816 904 3372",
    bloodGroup: "A-",
    status: "Active"
  },
  {
    id: 6,
    name: "Funke Adeyemi",
    age: 46,
    gender: "Female",
    phone: "0802 667 1189",
    bloodGroup: "AB+",
    status: "Inactive"
  },
  {
    id: 7,
    name: "Chinedu Eze",
    age: 23,
    gender: "Male",
    phone: "0703 145 8826",
    bloodGroup: "O+",
    status: "Active"
  },
  {
    id: 8,
    name: "Zainab Lawal",
    age: 31,
    gender: "Female",
    phone: "0814 392 5507",
    bloodGroup: "B-",
    status: "Active"
  },
  {
    id: 9,
    name: "Tunde Bakare",
    age: 64,
    gender: "Male",
    phone: "0806 218 4473",
    bloodGroup: "A+",
    status: "Inactive"
  },
  {
    id: 10,
    name: "Ngozi Nwosu",
    age: 29,
    gender: "Female",
    phone: "0901 553 7720",
    bloodGroup: "O+",
    status: "Active"
  },
  {
    id: 11,
    name: "Emeka Obi",
    age: 38,
    gender: "Male",
    phone: "0813 806 9935",
    bloodGroup: "B+",
    status: "Active"
  },
  {
    id: 12,
    name: "Aisha Bello",
    age: 19,
    gender: "Female",
    phone: "0708 471 2268",
    bloodGroup: "AB-",
    status: "Active"
  },
  {
    id: 13,
    name: "Segun Ojo",
    age: 52,
    gender: "Male",
    phone: "0805 330 6614",
    bloodGroup: "O+",
    status: "Inactive"
  },
  {
    id: 14,
    name: "Halima Yusuf",
    age: 44,
    gender: "Female",
    phone: "0817 742 0081",
    bloodGroup: "A+",
    status: "Active"
  },
  {
    id: 15,
    name: "Kelechi Nnamdi",
    age: 36,
    gender: "Male",
    phone: "0903 619 4457",
    bloodGroup: "O-",
    status: "Active"
  },
  {
    id: 16,
    name: "Bisi Adewale",
    age: 71,
    gender: "Female",
    phone: "0802 905 3346",
    bloodGroup: "B+",
    status: "Active"
  },
  {
    id: 17,
    name: "Yusuf Garba",
    age: 27,
    gender: "Male",
    phone: "0810 284 7719",
    bloodGroup: "A-",
    status: "Inactive"
  },
  {
    id: 18,
    name: "Chioma Uche",
    age: 33,
    gender: "Female",
    phone: "0706 168 5502",
    bloodGroup: "O+",
    status: "Active"
  },
  {
    id: 19,
    name: "Olumide Coker",
    age: 48,
    gender: "Male",
    phone: "0815 537 9028",
    bloodGroup: "AB+",
    status: "Active"
  },
  {
    id: 20,
    name: "Grace Etim",
    age: 25,
    gender: "Female",
    phone: "0908 446 1173",
    bloodGroup: "B+",
    status: "Active"
  }
];

