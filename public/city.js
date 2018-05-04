import {WeatherChatData} from "./WeatherChatData.js";
import {Comment} from './comment.js';

class City {
    constructor(city, temp, text, date,cityId) {
        this.comments = [];
        this.name = city;
        this.tempC = temp;
        this.tempF = Math.round(temp * 1.8 + 32);
        this.text = text;
        this.date = date;
        this.cityId = cityId;
    }
}
export {City};