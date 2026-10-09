/* ==================================================================
   DEVELOPER 6 · APPOINTMENTS
   File: js/06-appointments.js        (you edit ONLY this file)

   YOUR JOB
   1. Turn data/appointments.csv into an `appointments` array of objects.
   2. Show them in the table body with id="appointment-list".
   3. Put the number of appointments in #total-appointments.

   Property names (EXACTLY these, Developer 7 and 10 rely on them):
     id (number)  patient  doctor  department  date  time  status
   status is one of "Confirmed", "Pending", "Cancelled".

   YOU USE: getAppointmentClass(status) and getAppointmentMessage(status)
   from Developer 7.

   CONCEPTS: arrays, objects, loops, DOM, functions
   ================================================================== */

// STEP 1. Add appointments 2 to 12 from data/appointments.csv.
const appointments = [
  {
    id: 1,
    patient: "John Ade",
    doctor: "Dr. James Okon",
    department: "General Medicine",
    date: "2026-10-19",
    time: "09:00",
    status: "Confirmed"
  }
];

// STEP 2. renderAppointments(list): build one <tr> per appointment with a loop.
//   The status cell should look like this (Developer 7's functions):
//   <td><span class="badge ${getAppointmentClass(item.status)}">${item.status}</span>
//       <span class="badge-note">${getAppointmentMessage(item.status)}</span></td>
//   Then put the rows into #appointment-list with innerHTML,
//   and list.length into #total-appointments with textContent.
function renderAppointments(list) {
}
