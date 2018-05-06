
import {City} from './city.js';
import {Comment} from './comment.js';
import {} from './main.js';
 
var cityId = 0;
var commentId= 0 ;
var STORAGE_ID = 'WeatherChat';
var STORAGE_ID_CITY_COUNTER = 'cityId';
var STORAGE_ID_COMMENT_COUNTER = 'commentId';
var counterCityID = 0 ;
var countercommentID = 0 ;


class WeatherChatData {
    constructor(STORAGE_ID,cityId,commentId) {
        this.cities = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]')
        //this.cityId = JSON.parse(localStorage.getItem(cityId) || 0 )
        //this.commentId = JSON.parse(localStorage.getItem(commentId) || '' )
    }
    creatcity(city,temp, text, date,cityId) { 
        var newcity = new City(city, temp, text, date);
        this.cities.push(newcity);
        cityId++;

    }
    addComment(addto,comment,commentId) {
        var newComment = new Comment(comment,commentId);
        console.log(addto);
        this.addto.comments.push(newComment);
        commentId++;
    }
    saveToLocalStorage () {
            localStorage.setItem(STORAGE_ID, JSON.stringify(currentWeb.cities));
           // localStorage.setItem(STORAGE_ID_CITY_COUNTER, JSON.stringify(currentWeb.cities.cityId));
           // localStorage.setItem(STORAGE_ID_COMMENT_COUNTER, JSON.stringify(currentWeb.cities.commentId));
            
     }
}

const currentWeb = new WeatherChatData('WeatherChat','cityId','commentId');
export {currentWeb};