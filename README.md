# Medicare Health Centre · Patient Management Portal

A browser-based patient portal built by a Webbo3 pod of ten developers, using
only HTML, CSS and JavaScript fundamentals (variables, data types, operators,
conditionals, loops, functions, arrays, array methods, objects and the DOM).

**Live site:** _the leader adds the GitHub Pages link here_

## The team

| Role | File | Developer (GitHub username) |
| --- | --- | --- |
| 1 · Patient Data | `js/01-patient-data.js` | Virus-dotcom-hub |
| 2 · Patient List | `js/03-patient-list.js` | Wizzybio |
| 3 · Patient Search | `js/04-patient-search.js` | faithy555 |
| 4 · Patient Status | `js/02-patient-status.js` | adelodunsamuel08 |
| 5 · Statistics | `js/05-statistics.js` | Burnakeen |
| 6 · Appointments | `js/06-appointments.js` | ksv1-prog |
| 7 · Appointment Status | `js/07-appointment-status.js` | suleimanqudus81-cloud |
| 8 · Registration | `js/08-register-patient.js` | innocentmercy124 |
| 9 · Patient Profile | `js/09-patient-profile.js` | sulaimanabdul139-creator |
| 10 · Lead Developer | `js/10-dashboard.js`, `index.html`, `css/style.css` | oluwakayodesamuel-coder |

## How it fits together

`index.html` loads the ten scripts in order. Data comes first
(`01-patient-data.js`), the dashboard last (`10-dashboard.js`), which calls
`startDashboard()` to fill every section. Each developer edits only their own
file and opens a pull request; the leader merges.

## Run it

Open `index.html` in a browser. No install, no server.

## Test it

Open `check.html`. It tries every developer's functions with Medicare's
data: green works, amber is waiting for a teammate's part, red says what to
fix. Nobody edits `check.html` or the `check/` folder.

## Data

`data/patients.csv` and `data/appointments.csv` are Medicare's records, turned
into JavaScript arrays of objects by Developers 1 and 6.
