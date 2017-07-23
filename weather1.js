/**
 * Created by Egor on 23.07.2017.
 */
function getTimeFormat(lengthDaySec) {
    const dayLH = Math.floor(lengthDaySec / 3600);
    const dayLM = Math.floor((lengthDaySec - dayLH * 3600) / 60);
    const dayLS = Math.floor(lengthDaySec - dayLH * 3600 - dayLM * 60);

    return `${dayLH}:${dayLM}:${dayLS}`;
}

function getCityParameters(town) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
        .then( response => response.json() )
.then( json => {const lengthDaySec = Math.floor(json.sys.sunset - json.sys.sunrise);
    const dayLength = getTimeFormat(lengthDaySec);
    console.log(`Температура в Цельсиях: ${json.main.temp}\nПродолжительность дня: ${dayLength}\nСкорость ветра: ${json.wind.speed}`);
})
.catch( error => {
        console.error('Fetch error: ' + error.message);
});
}

getCityParameters('Moscow');
