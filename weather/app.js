function fetchWeather(theURL) {
  fetch(theURL)
    .then(response => response.json())
    .then(data => {
      weather = data;
      console.log(weather);
      const avgtempC = weather.current_condition[0].temp_C;
      const maxt = weather.weather[0].maxtempC;
      const mint = weather.weather[0].mintempC;
      const feelLike = weather.current_condition[0].FeelsLikeC;
      const weee = weather.current_condition[0].weatherDesc[0].value;
      const humidity = weather.current_condition[0].humidity;
      const cloudcover = weather.current_condition[0].cloudcover;
      const windir = weather.current_condition[0].winddirDegree;
      const winspeed = weather.current_condition[0].windspeedKmph;
      const moonphase = weather.weather[0].astronomy[0].moon_phase;
      const pressure = weather.current_condition[0].pressure;
      const location = weather.nearest_area[0].areaName[0].value;
      const sunrise = weather.weather[0].astronomy[0].sunrise;
      const sunset = weather.weather[0].astronomy[0].sunset;
      const moonrise = weather.weather[0].astronomy[0].moonrise;
      const moonset = weather.weather[0].astronomy[0].moonset;

      document.getElementById('sunrise').textContent = sunrise;
      document.getElementById('sunset').textContent = sunset;


      document.getElementById('location').textContent = location;
      document.getElementById('tem1').innerHTML = d1tem + '<sup>°C</sup>';
      document.getElementById('d1min').innerHTML = d1min + '<sup>°C</sup>';
      document.getElementById('d1max').innerHTML = d1max + '<sup>°C</sup>';
      document.getElementById('d1d').textContent = "Today";
      document.getElementById('d2min').innerHTML = d2min + '<sup>°C</sup>';
      document.getElementById('d2max').innerHTML = d2max + '<sup>°C</sup>';
      document.getElementById('d2d').textContent = "Tomorrow";
      document.getElementById('tem2').innerHTML = d2tem + '<sup>°C</sup>';
      document.getElementById('d3min').innerHTML = d3min + '<sup>°C</sup>';
      document.getElementById('d3max').innerHTML = d3max + '<sup>°C</sup>';
      document.getElementById('d3d').textContent = "Overmorrow";
      document.getElementById('tem3').innerHTML = d3tem + '<sup>°C</sup>';
      document.getElementById('pressure').textContent = pressure + ' mbar';
      document.getElementById('moonphase').textContent = moonphase;
      document.getElementById('humidity').textContent = humidity + '%';
      document.getElementById('cloudcover').innerText = cloudcover + '%';
      document.getElementById('winspeed').innerHTML = winspeed + " Kmph";
      document.getElementById('windeg').style.rotate = windir + 'deg';
      document.getElementById('weee').textContent = weee;
      minmax = maxt + '<sup>°C</sup>' + '/' + mint + '<sup>°C</sup>';
      document.getElementById('minmax').innerHTML = minmax;
      document.getElementById('feels').innerHTML = '<p>Feels like ' + feelLike + '<sup>°C</sup></p>';
      const distemp = document.getElementById('weacel');
      distemp.innerHTML = avgtempC + '<sup>°C</sup>';
      var wcd = weather.current_condition[0].weatherCode;
      console.log(wcd);
    })
}


function getWeather() {
  const baseUrl = "https://wttr.in/";
  const location = localStorage.getItem('location');
  const mode = '?format=j2';
  theURL = baseUrl + location + mode;
  console.log(theURL);
  fetchWeather(theURL)

}
function fetchloc() {
  const locationip = document.getElementById('city').value;
  localStorage.setItem('location', locationip);
  getWeather();
}
localStorage.setItem('location', 'Salem,Tamilnadu');
getWeather();
