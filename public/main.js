import {City} from './city.js';
import {Comment} from './comment.js';
import {currentWeb} from "./WeatherChatData.js";
import {weatherApi} from "./api.js";
import {weatherrander} from "./rander.js";

weatherrander.randerWeatherChat(currentWeb);

$('.addCity').on('click', function () {
    var city = $('#searchByCity').val();
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
    weatherApi.fetch(city,searchtext);
    currentWeb.saveToLocalStorage();
    weatherrander.randerWeatherChat(currentWeb);
});

var _findPostById = function (id) {
    for (var i = 0; i < currentWeb.cities.length; i += 1) {
      if (currentWeb.cities[i].cityId === id) {
        return currentWeb.cities[i];
      }
    }
  }

  $('.results').on('click','.add-comment', function () {
    var cText=$(this).closest('div').find('.comment-text').val();
    var addto=_findPostById($(this).closest('.city').data().id);
    currentWeb.addComment(addto,cText);
    randerWeatherChat(currentWeb);
    currentWeb.saveToLocalStorage();
  });


