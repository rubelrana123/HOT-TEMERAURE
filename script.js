// console.log('index connected');
// c62f170ba75a013bed198cb83b4bf6de;
// &units=metric

const myApi= `c62f170ba75a013bed198cb83b4bf6de`;
const loadTempereture = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`;
  fetch(url)
		.then((res) => res.json())
		.then((data) => displayTempereture(data));
}

const displayTempereture = (areaTempereture) => {
	console.log(areaTempereture);
  const weatherContent = document.getElementById('weather_content');
  // const iconURL = `http://openweathermap.org/img/wn/${areaTempereture.weather[0].icon}@2x.png`;
	// const imgIcon = document.getElementById('weather-icon');
	// imgIcon.setAttribute('src', iconURL);
	console.log(typeof areaTempereture.weather[0].icon);

  weatherContent.innerHTML = `
   <img id="weather-icon" src="http://openweathermap.org/img/wn/${areaTempereture.weather[0].icon}@2x.png" alt="">
            <h1 id="condition" class="lead">${areaTempereture.weather[0].main}</h1>

            <h1 id="city">${areaTempereture.name}</h1>
            <h3><span id="temperature">${areaTempereture.main.temp}</span>&deg;C</h3>
  
  `;
  
};

// function setElementValueById(elementId,text) {
// 	const element = document.getElementById(elementId);
// 	element.value = text;
//   // return element;
// }

document.getElementById('btn').addEventListener("click", function() {
  const mycity = document.getElementById('inputField');
  const city = mycity.value;
  // const city = setElementValueById('inputField',text);
  loadTempereture(city);

});
  loadTempereture('dinajpur');

// document.getElementById('inputField').addEventListener("keypress", function(event) {

//   console.log(event.key)

//   if(event.key === Enter) {
    
//     const mycity = document.getElementById('inputField');
//     const city = mycity.value;
//     // const city = setElementValueById('inputField',text);
//     loadTempereture(city);
//   }
  

// });