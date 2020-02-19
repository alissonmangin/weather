import axios from 'axios';

export function getWeather(){
    return axios.get("https:api.openweathermap.org/data/2.5/weather?q=Nancy&appid=55a07ce7dd61dbb72f56b25ce2b495df");
}