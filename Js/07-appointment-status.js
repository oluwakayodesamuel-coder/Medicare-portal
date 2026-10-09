/* ==================================================================
   DEVELOPER 7 · APPOINTMENT STATUS
   File: js/07-appointment-status.js  (you edit ONLY this file)

   YOUR JOB
   Turn an appointment status into words staff understand and a colour.
   Two functions. Each takes the status TEXT and RETURNS a value.

   WHO USES YOUR WORK
   Developer 6 calls both for every row of the appointments table:
     getAppointmentMessage("Pending")  -> "Waiting for confirmation"
     getAppointmentClass("Pending")    -> "status-pending"
   The classes are already coloured in css/style.css:
     status-confirmed (green)  status-pending (amber)  status-cancelled (red)

   CONCEPTS: if / else if / else, logical thinking, comparison
   ================================================================== */

// STEP 1. getAppointmentMessage(status), with if / else if / else:
//   "Confirmed" -> "Appointment confirmed"
//   "Pending"   -> "Waiting for confirmation"
//   "Cancelled" -> "Appointment cancelled"
//   anything else -> "Status unknown, call the front desk"
function getAppointmentMessage(status) {
  return ""; // <- replace
}

// STEP 2. getAppointmentClass(status), the same way:
//   "Confirmed" -> "status-confirmed", "Pending" -> "status-pending",
//   "Cancelled" -> "status-cancelled", anything else -> ""
function getAppointmentClass(status) {
  return ""; // <- replace
}

// STEP 3. Test in the Console: getAppointmentMessage("Cancelled")
