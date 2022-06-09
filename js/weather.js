const cityContainer = document.querySelector("#weather span:first-child");
const weatherContainer = document.querySelector("#weather span:last-child");

function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      cityContainer.innerText = `${data.name} - `;
      weatherContainer.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}° C`;
    });
  console.log("It's your position", lat, lon);
}

function onGeoError() {
  alert("can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);
