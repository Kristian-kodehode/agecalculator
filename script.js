const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const calculateButton = document.getElementById("button-calculate");
const resetButton = document.getElementById("button-reset");

let intervalId;
function calculate() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    let birthdate = new Date(document.getElementById("birthdate").value);

    //Defining new date, subtracts with the user input aka birthdate
    let now = new Date();
    let ageInMilliSeconds = now.getTime() - birthdate.getTime();

    //Calculates time from ms to seconds, sec to min etc.
    let ageInSeconds = ageInMilliSeconds / 1000;
    let ageInMinutes = ageInSeconds / 60;
    let ageInHours = ageInMinutes / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonths = ageInDays / 30.4375;
    let ageInYears = ageInMonths / 12;

    //Uses remainder to calculate what is bigger than the number it represents.
    years.textContent = Math.floor(ageInYears);
    months.textContent = Math.floor(ageInMonths % 12);
    days.textContent = Math.floor(ageInDays % 30.4375);
    hours.textContent = Math.floor(ageInHours % 24);
    minutes.textContent = Math.floor(ageInMinutes % 60);
    seconds.textContent = Math.floor(ageInSeconds % 60);
    // document.querySelector("#seconds").style.borderBottom = "1px grey solid";
  }, 1000);
}

//Resets window by reload
function reset() {
  clearInterval(intervalId);
  years.textContent = "";
  months.textContent = "";
  days.textContent = "";
  hours.textContent = "";
  minutes.textContent = "";
  seconds.textContent = "";
  // window.location.reload();
  // console.log("Reset clicked");
}

calculateButton.addEventListener("click", calculate);
resetButton.addEventListener("click", reset);
