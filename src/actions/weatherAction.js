import axios from 'axios';

const baseURL = "https:api.openweathermap.org/data/2.5";
const appID = "&appid=55a07ce7dd61dbb72f56b25ce2b495df";

export function getWeather(){
    return axios.get(baseURL+"/weather?q=Nancy"+appID);
}