
import {City} from './city.js';
import {Comment} from './comment.js';



class WeatherChatData {
    constructor(STORAGE_ID) {
        this.cities = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]')
        this.cityId = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]')
        this.commentId = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]')
    }
    creatcity(city,temp, text, date,cityId) { 
        var newcity = new City(city, temp, text, date);
        this.cities.push(newcity);
    }
    addComment(addto,comment,commentId) {
        var newComment = new Comment(comment,commentId);
        addto.comments.push(newComment);
    }
}
export  {WeatherChatData};