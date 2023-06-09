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

    document.querySelector("#years").textContent = Math.floor(ageInYears);
    document.querySelector("#months").textContent = Math.floor(
      ageInMonths % 12
    );
    document.querySelector("#days").textContent = Math.floor(
      ageInDays % 30.4375
    );
    document.querySelector("#hours").textContent = Math.floor(ageInHours % 24);
    document.querySelector("#minutes").textContent = Math.floor(
      ageInMinutes % 60
    );
    document.querySelector("#seconds").textContent = Math.floor(
      ageInSeconds % 60
    );
    document.querySelector("#seconds").style.borderBottom = "1px grey solid";
  }, 1000);
}

function reset() {
  window.location.reload();
}

calculateButton.addEventListener("click", calculate);
