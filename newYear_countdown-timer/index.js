let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
const newYears = "1 Jan 2021";

const countDown = () => {
  const newYearDate = new Date(newYears);
  const date = new Date();

  const total_seconds = (newYearDate - date) / 1000;
  //   console.log(total_seconds);
  const left_days = Math.floor(total_seconds / 3600 / 24);
  const left_hours = Math.floor((total_seconds / 3600) % 24);
  const left_mins = Math.floor((total_seconds / 60) % 60);
  const left_secs = Math.floor(total_seconds % 60);

  days.innerText = formatTime(left_days);
  hours.innerText = formatTime(left_hours);
  mins.innerText = formatTime(left_mins);
  secs.innerText = formatTime(left_secs);
};

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
