
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
  },
  {
    id: 2,
    patient: "Sarah Bello",
    doctor: "Dr. Mary Adebayo",
    department: "Gynaecology",
    date: "2026-10-19",
    time: "10:30",
    status: "Pending"
  },
  {
    id: 3,
    patient: "Amaka Okafor",
    doctor: "Dr. Femi Alade",
    department: "Cardiology",
    date: "2026-10-19",
    time: "12:00",
    status: "Confirmed"
  },
  {
    id: 4,
    patient: "Ibrahim Musa",
    doctor: "Dr. James Okon",
    department: "General Medicine",
    date: "2026-10-20",
    time: "08:30",
    status: "Cancelled"
  },
  {
    id: 5,
    patient: "Chinedu Eze",
    doctor: "Dr. Hauwa Sani",
    department: "Dental",
    date: "2026-10-20",
    time: "11:00",
    status: "Pending"
  },
  {
    id: 6,
    patient: "Zainab Lawal",
    doctor: "Dr. Mary Adebayo",
    department: "Gynaecology",
    date: "2026-10-20",
    time: "14:00",
    status: "Confirmed"
  },
  {
    id: 7,
    patient: "Ngozi Nwosu",
    doctor: "Dr. Femi Alade",
    department: "Cardiology",
    date: "2026-10-21",
    time: "09:30",
    status: "Confirmed"
  },
  {
    id: 8,
    patient: "Emeka Obi",
    doctor: "Dr. Hauwa Sani",
    department: "Dental",
    date: "2026-10-21",
    time: "13:00",
    status: "Pending"
  },
  {
    id: 9,
    patient: "Halima Yusuf",
    doctor: "Dr. James Okon",
    department: "General Medicine",
    date: "2026-10-22",
    time: "10:00",
    status: "Confirmed"
  },
  {
    id: 10,
    patient: "Bisi Adewale",
    doctor: "Dr. Femi Alade",
    department: "Cardiology",
    date: "2026-10-22",
    time: "15:30",
    status: "Cancelled"
  },
  {
    id: 11,
    patient: "Olumide Coker",
    doctor: "Dr. Hauwa Sani",
    department: "Dental",
    date: "2026-10-23",
    time: "09:00",
    status: "Confirmed"
  },
  {
    id: 12,
    patient: "Grace Etim",
    doctor: "Dr. Mary Adebayo",
    department: "Gynaecology",
    date: "2026-10-23",
    time: "11:30",
    status: "Pending"
  }
];


// STEP 2. renderAppointments(list): build one <tr> per appointment with a loop.
//   The status cell should look like this (Developer 7's functions):
//   <td><span class="badge ${getAppointmentClass(item.status)}">${item.status}</span>
//       <span class="badge-note">${getAppointmentMessage(item.status)}</span></td>
//   Then put the rows into #appointment-list with innerHTML,
//   and list.length into #total-appointments with textContent.
function renderAppointments(list) {
  const appointmentList = document.getElementById("appointment-list");
  const totalAppointments = document.getElementById("total-appointments");

  let rows = "";

  for (const item of list) {
    rows += `<tr>
      <td>${item.id}</td>
      <td>${item.patient}</td>
      <td>${item.doctor}</td>
      <td>${item.department}</td>
      <td>${item.date}</td>
      <td>${item.time}</td>
      <td>
        <span class="badge ${getAppointmentClass(item.status)}">${item.status}</span>
        <span class="badge-note">${getAppointmentMessage(item.status)}</span>
      </td>
    </tr>`;
  }

  if (list.length === 0) {
    rows = `<tr>
      <td colspan="7" class="empty">No appointments found.</td>
    </tr>`;
  }

  appointmentList.innerHTML = rows;
  totalAppointments.textContent = list.length;
}
