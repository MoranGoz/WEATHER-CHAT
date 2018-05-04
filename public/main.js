import {City} from './city.js';
import {Comment} from './comment.js';
import {WeatherChatData} from "./WeatherChatData.js";
import {weatherApi} from "./api.js";

var STORAGE_ID = 'WeatherChat';
var counterCityID = 0 ;
var countercommentID = 0 ;
var currentWeb = new WeatherChatData(STORAGE_ID);


var renderWeatherChat = function (currentWeb) {
    $('.results').empty();
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(currentWeb);
    $('.results').append(newHTML);
}
renderWeatherChat(currentWeb);

// var getFromLocalStorage = function () {
//     if (localStorage.getItem(STORAGE_ID)){
//         return JSON.parse(localStorage.getItem(STORAGE_ID))
//     } 
//     else {
//         return  new WeatherChatData() ;
//     }   
//   };

var saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(currentWeb.cities));
}



// var setData = function (city, data) {
//    var temp = data.query.results.channel.item.condition.temp;
//    var text = data.query.results.channel.item.condition.text;
//    var date = data.query.results.channel.item.condition.date;
//    currentWeb.creatcity(city, temp, text, date,cityId);
//    cityId++;
// }

$('.addCity').on('click', function () {
    var city = $('#searchByCity').val();
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
    weatherApi.fetch(city, searchtext);
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
    currentWeb.addComment(addto,cText,commentId);
    commentId++;
    renderWeatherChat(currentWeb);
    saveToLocalStorage();
  });


/// befor dividing the fetch
// var fetch = function (city, searchtext) {
//     $.ajax({
//         method: "GET",
//         url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json",
//         success: function (data) {
//             setData(city, data);
//             saveToLocalStorage();
//             renderWeatherChat(currentWeb);
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log(textStatus);
//         }
//     });
// };

