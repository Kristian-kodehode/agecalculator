const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const calculateButton = document.getElementById("button-calculate");
const resetButton = document.getElementById("reset-button");

function calculate() {
  setInterval(() => {
    let birthdate = new Date(document.getElementById("birthdate").value);

    let now = new Date();
    let ageInMilliSeconds = now.getTime() - birthdate.getTime();

    let ageInSeconds = ageInMilliSeconds / 1000;
    let ageInMinutes = ageInSeconds / 60;
    let ageInHours = ageInMinutes / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonths = ageInDays / 30.4375;
    let ageInYears = ageInMonths / 12;

    years.textContent = Math.floor(ageInYears);
    months.textContent = Math.floor(ageInMonths % 12);
    days.textContent = Math.floor(ageInDays % 30.4375);
    hours.textContent = Math.floor(ageInHours % 24);
    minutes.textContent = Math.floor(ageInMinutes % 60);
    seconds.textContent = Math.floor(ageInSeconds % 60);
    document.querySelector("#seconds").style.borderBottom = "1px grey solid";
  }, 1000);
}

function reset() {
  window.location.reload();
}

calculateButton.addEventListener("click", calculate);
