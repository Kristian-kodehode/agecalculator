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
    document.querySelector("#months").textContent = Math.floor(ageInYears);
    document.querySelector("#days").textContent = Math.floor(ageInYears);
    document.querySelector("#hours").textContent = Math.floor(ageInYears);
    document.querySelector("#minutes").textContent = Math.floor(ageInYears);
    document.querySelector("#seconds").style.borderBottom = "1px grey solid";
  }, 1000);
}

function reset() {
  window.location.reload();
}
