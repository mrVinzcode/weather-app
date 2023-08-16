const inputval = document.querySelector("#cityinput");
const btn = document.querySelector("#add");
const city = document.querySelector("#cityoutput");
const descrip = document.querySelector("#description");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
apik = "3045dd712ffe6e702e3245525ac7fa38";
function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      const nameval = data["name"];
      const descripVal = data["weather"]["0"]["description"];
      const tempature = data["main"]["temp"];
      const wndspd = data["wind"]["speed"];

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descripVal}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
    })

    .catch((err) => alert("You entered Wrong city name"));
});
