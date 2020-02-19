import React from 'react';
import {mocksWeather} from '../mocks/mocksWeather.js';
import {useState} from 'react';
import {getWeather} from '../actions/weatherAction.js';

function Weather() {

    const [weather, setWeather] = useState(mocksWeather);

    loadWeatherData();

    function kelToCel(tempKel){
        return Math.round(tempKel - 273.15);
    }

    async function loadWeatherData(){
        const weatherAjax = await getWeather();
        console.log(weatherAjax.data);
        // setWeather(weatherAjax.data);
    }

    function changeIcon(idIcon){
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
    }

    return (
        
        <div>
            <h1> YOLO MÉTÉO</h1>
            <img alt="" src={changeIcon(weather.weather[0].icon)}></img>
            Ville: {weather.name}<br/>
            Température: {kelToCel(weather.main.temp)}°C<br/>
            Description: {weather.weather[0].description}<br/>
        </div>
    )
}

export default Weather
