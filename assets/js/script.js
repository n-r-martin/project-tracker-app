/////// VARIABLES ///////
const dateTimeElement = $('#date-time');

/////// HERO-HEADER ///////

// Populating current date & time in header
let currentDateTime = moment();
dateTimeElement.text(currentDateTime.format('LLL'));