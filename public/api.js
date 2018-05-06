import {City} from './city.js';
import {Comment} from './comment.js';
import {currentWeb} from "./WeatherChatData.js";
import {weatherrander} from './rander.js';

var setData = function (city, data) {
    var temp = data.query.results.channel.item.condition.temp;
    var text = data.query.results.channel.item.condition.text;
    var date = data.query.results.channel.item.condition.date;
    currentWeb.creatcity(city, temp, text, date);
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
                weatherrander.randerWeatherChat(currentWeb);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                alert ('city does not found');
            }
        });
    };
}

const weatherApi = new Api() ;

export {weatherApi};