
// let container = document.getElementById('container');
// document.body.appendChild(container);
// const Apikeys = '8a7c5f216d1e4f58121cb402544abc69';

// fetch(`https://restcountries.com/v3.1/all`)
//   .then((response) => response.json())
//   .then((data) => countryDetails(data));

// function countryDetails(data) {
//   for (let i = 0; i < data.length; i++) {
//     let countryInfo = document.createElement('div');
//     countryInfo.className = 'card-group';

//     let card = `
//       <div class="card text-center">
//         <h5 class="card-title">${data[i].name.common}</h5>
//         <div class="card-body">
//           <img src="${data[i].flags.png}" class="card-img-top" alt="${data[i].name.common}">
//           <p class="card-text">Capital: ${data[i].capital}</p>
//           <p class="card-text">Region: ${data[i].region}</p>
//           <p class="card-text">Country Code: ${data[i].fifa}</p>
//           <p class="card-text">Latlng: ${data[i].latlng}</p>
//           <button class="btn btn-primary">Click for weather</button>
//           <div id="weatherinfo_${i}" class="weather-info"></div>
//         </div>
//       </div>
//     `;

//     countryInfo.innerHTML = card;
//     container.appendChild(countryInfo);

//     let weatherButton = countryInfo.querySelector('.btn');
//     weatherButton.addEventListener('click', () => {
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[i].capital[0]}&appid=${Apikeys}`)
//         .then((response) => response.json())
//         .then((weatherData) => weatherDetails(weatherData, i));
//     });
//   }
// }

// function weatherDetails(weatherData, index) {
//   let weatherInfo = document.querySelector(`#weatherinfo_${index}`);
//   weatherInfo.innerHTML = `
//     <p>Temperature: ${weatherData.main.temp}</p>
//     <p>Pressure: ${weatherData.main.pressure}</p>
//     <p>Humidity: ${weatherData.main.humidity}</p>
//   `;
// }





let container = document.getElementById('container');
document.body.appendChild(container);
const Apikeys = '8a7c5f216d1e4f58121cb402544abc69';

fetch(`https://restcountries.com/v3.1/all`)
  .then((response) => response.json())
  .then((data) => countryDetails(data));

function countryDetails(data) {
  let row = document.createElement('div');
  row.className = 'row';

  for (let i = 0; i < data.length; i++) {
    let col = document.createElement('div');
    col.className = 'col-sm-4';
    let countryInfo = document.createElement('div');
    countryInfo.className = 'card text-center';

    let card = `
      <h5 class="card-title bg-warning form-control" >${data[i].name.common}</h5>
      <div class="card-body">
        <img src="${data[i].flags.png}" class="card-img-top p-3 " alt="${data[i].name.common}">
        <p class="card-text">Capital: ${data[i].capital}</p>
        <p class="card-text">Region: ${data[i].region}</p>
        <p class="card-text">Country Code: ${data[i].fifa}</p>
        <p class="card-text">Latlng: ${data[i].latlng}</p>
        <button class="btn btn-primary">Click for weather</button>
        <div id="weatherinfo_${i}" class="weather-info"></div>
      </div>
    `;

    countryInfo.innerHTML = card;
    col.appendChild(countryInfo);
    row.appendChild(col);

    let weatherButton = countryInfo.querySelector('.btn');
    weatherButton.addEventListener('click', () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[i].capital[0]}&appid=${Apikeys}`)
        .then((response) => response.json())
        .then((weatherData) => weatherDetails(weatherData, i));
    });
  }

  container.appendChild(row);
}

function weatherDetails(weatherData, index) {
  let weatherInfo = document.querySelector(`#weatherinfo_${index}`);
  weatherInfo.innerHTML = `
    <p>Temperature: ${weatherData.main.temp}</p>
    <p>Pressure: ${weatherData.main.pressure}</p>
    <p>Humidity: ${weatherData.main.humidity}</p>
  `;
}
