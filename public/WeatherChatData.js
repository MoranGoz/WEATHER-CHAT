
import {City} from './city.js';
import {Comment} from './comment.js';
import {} from './main.js';
import {weatherrander} from './rander.js';

 
var STORAGE_ID = 'WeatherChat';
var STORAGE_ID_CITY_COUNTER = 'cityId';
var STORAGE_ID_COMMENT_COUNTER = 'commentId';

class WeatherChatData {
    constructor(STORAGE_ID,cityId,commentId) {
        this.cities = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        this.cityId = (localStorage.getItem(STORAGE_ID_CITY_COUNTER) || 0 );
        this.commentId = (localStorage.getItem(STORAGE_ID_COMMENT_COUNTER) || 0 );
    }
    creatcity(city,temp, text, date) { 
        var newcity = new City(city, temp, text, date,this.cityId);
        this.cities.push(newcity);
        this.cityId++;

    }
    addComment(addto,comment) {
        var newComment = new Comment(comment,this.commentId);
        addto.push(newComment);
        weatherrander.randerWeatherChat(currentWeb);
        this.commentId++;
    }
    saveToLocalStorage () {
            localStorage.setItem(STORAGE_ID, JSON.stringify(currentWeb.cities));
            localStorage.setItem(STORAGE_ID_CITY_COUNTER,this.cityId);
            localStorage.setItem(STORAGE_ID_COMMENT_COUNTER,this.commentId);   
     }
//     removePost (currentPost) {
//         var $clickedPost = $(currentPost).closest('.city');
//         var id = $clickedPost.data().id;
//         var i = _findIndexOfPostById(id);
//         this.cities.splice(i, 1);
//         $clickedPost.remove();
//         this.saveToLocalStorage();
//         weatherrander.randerWeatherChat(currentWeb);
//   }
}

const currentWeb = new WeatherChatData('WeatherChat','cityId','commentId');
export {currentWeb};