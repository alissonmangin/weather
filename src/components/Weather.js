import React from 'react';
// import {mocksWeather} from '../mocks/mocksWeather.js';
import {useState, useEffect} from 'react';
import {getWeather} from '../actions/weatherAction.js';

function Weather() {

    // const [weather, setWeather] = useState(mocksWeather);
    const [weather, setWeather] = useState(null);

    
    useEffect(()=>{
        loadWeatherData();
    }, [])

    function kelToCel(tempKel){
        return Math.round(tempKel - 273.15);
    }

    async function loadWeatherData(){
        const weatherAjax = await getWeather();
        setWeather(weatherAjax.data);
    }

    function changeIcon(idIcon){
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
    }

    return (
        
        <div>
            {
                weather ? 
                <div>
                    <h1> YOLO MÉTÉO</h1>
                    <img alt="" src={changeIcon(weather.weather[0].icon)}></img>
                    Ville: {weather.name}<br/>
                    Température: {kelToCel(weather.main.temp)}°C<br/>
                    Description: {weather.weather[0].description}<br/>
                </div>
                : <h1>Météo en attente de chargement</h1>
            }
        </div>
    )
}

export default Weather
