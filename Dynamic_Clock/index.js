var check = true;
var start;
const clockTiming = () => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("time").innerText = time;
};
const clockStart = () => {
  start = setInterval(clockTiming, 1000);
};
clockStart();
const clockStop = () => {
  clearInterval(start);
};
const clock = () => {
  if (check === true) {
    document.getElementById("btn").innerText = "Start";
    check = false;
    document.getElementById("btn").style.background = "green";
    clockStop();
  } else {
    document.getElementById("btn").innerText = "Stop";
    check = true;
    document.getElementById("btn").style.background = "red";
    clockStart();
  }
};
