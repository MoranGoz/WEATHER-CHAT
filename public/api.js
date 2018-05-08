import {City} from './city.js';
import {Comment} from './comment.js';
import {currentWeb} from "./WeatherChatData.js";
import {weatherrander} from './rander.js';

var setData = function (city, data) { // Tis function should be inside the class. No more wondering around function. All function should be inside a class/
    var temp = data.query.results.channel.item.condition.temp;
    var text = data.query.results.channel.item.condition.text;
    var date = data.query.results.channel.item.condition.date;
    currentWeb.creatcity(city, temp, text, date); // I prefer that the function willl return the value and wouldnt ust access the data layer.
 }
class Api {
    constructor (){

    }
    fetch (city, searchtext) {
        $.ajax({
            method: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json",
            success: function (data) {
                setData(city, data); // let obj = this.setData(city, data); return obj;
                weatherrander.randerWeatherChat(currentWeb); /// The API shouln't know about the view layer and the data layer. Those two function should be invoked from the controller.
                // For that to happen you should return a promise from this function. Use te then function an dnot the success.
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
