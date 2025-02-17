let month = document.getElementById('month');
let day = document.getElementById('day');

let dates = document.getElementById('date');
let year = document.getElementById('year');


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let m = date.getMonth()
let dat = date.getDate()
let da = date.getDay()
let y = date.getFullYear()

dat = dat < 10 ? `0${dat}` : dat;
dates.innerHTML = (dat);
month.innerHTML = (months[m]);
day.innerHTML = (days[da]);
year.innerHTML = (y);
