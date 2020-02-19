import React, { useState, useEffect } from 'react'
import { recupere_la_meteo, recupere_la_meteo_ville } from '../actions/weatherAction'

function Weather() {
    const [weather, setWeather] = useState(null);
    const [ville, setVille] = useState("Paris");

    useEffect(() => {
        chargement_de_la_meteo_ville(ville);
    }, [ville]);

    useEffect(() => {
        // Mise à jour de la page au changement du state que si ville est modifiée
        chargement_de_la_meteo();
    }, []);


    function changement_ville(ville) {
        setVille(ville);
    }


    function kelvin_to_celsuis(tempK) {
        return Math.round(tempK - 273.15);
    }

    function icon(ic) {
        return "http://openweathermap.org/img/wn/" + ic + "@2x.png"
    }

    async function chargement_de_la_meteo_ville(ville) {
        const meteo = await recupere_la_meteo_ville(ville);
        setWeather(meteo.data);
    }
    async function chargement_de_la_meteo() {
        const meteo = await recupere_la_meteo();
        setWeather(meteo.data);
    }

    return (
        <div>

            {weather ?
                <div>
                    <h1>{weather.name}</h1>
                    <form>
                        <label>
                            Ville :
                         <input type="text" name="name" onChange={(event) => { changement_ville(event.target.value) }} />
                        </label>
                    </form>
                    <img src={icon(weather.weather[0].icon)}></img><br />
                    
                    <p>Description : {weather.weather[0].description}</p>
                    <p> Taux d'humidité : {weather.main.humidity} %</p>
                    <p> Température : {kelvin_to_celsuis(weather.main.temp)} C°</p>
                    <p> Température ressentie : {kelvin_to_celsuis(weather.main.feels_like)} C°</p>
                    <p> Vitesse du vent : {weather.wind.speed} m/s</p>
                </div>
                :
                <div>
                    <h1>Attente de chargement de la météo</h1>
                </div>
            }

        </div>
    )
}
export default Weather