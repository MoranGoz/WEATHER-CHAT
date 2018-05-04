import {City} from './city.js';
import {Comment} from './comment.js';
import {WeatherChatData} from "./WeatherChatData.js";

var setData = function (city, data) {
    var temp = data.query.results.channel.item.condition.temp;
    var text = data.query.results.channel.item.condition.text;
    var date = data.query.results.channel.item.condition.date;
    currentWeb.creatcity(city, temp, text, date,cityId);
    cityId++;
 }

class Api {
    constructor (){

    }

    fetch (city, searchtext) {
        $.ajax({
            method: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json",
            success: function (data) {
                setData(city, data);
                saveToLocalStorage();
                renderWeatherChat(currentWeb);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    };
}

const weatherApi = new Api() ;

export {weatherApi};