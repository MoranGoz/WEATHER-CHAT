import {City} from './city.js';
import {Comment} from './comment.js';
import {currentWeb} from "./WeatherChatData.js";


class rander{
    constructor (){
    }
    randerWeatherChat (currentWeb){
        $('.results').empty();
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(currentWeb);
        $('.results').append(newHTML);
    }
    
}

const weatherrander = new rander() ;


export {weatherrander};