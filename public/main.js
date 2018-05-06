import {City} from './city.js';
import {Comment} from './comment.js';
import {currentWeb} from "./WeatherChatData.js";
import {weatherApi} from "./api.js";
import {weatherrander} from "./rander.js";

weatherrander.randerWeatherChat(currentWeb);

var _findPostById = function (id) {
    for (var i = 0; i < currentWeb.cities.length; i += 1) {
      if (currentWeb.cities[i].cityId === id) {
        return currentWeb.cities[i].comments;
      }
    }
  }

  var _findIndexOfPostById = function (id) {
    for (var i = 0; i < currentWeb.cities.length; i += 1) {
      if (currentWeb.cities[i].cityId === id) {
        return i;
      }
    }
  }

  var _findcommentById = function (array,id) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i].Cid === Cid) {
        return array[i];
      }
    }
  }

  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.city');
    var id = $clickedPost.data().id;
    var i = _findIndexOfPostById(id);
    currentWeb.cities.splice(i, 1);
    $clickedPost.remove();
    currentWeb.saveToLocalStorage();
    weatherrander.randerWeatherChat(currentWeb);
  }

  var removeComment = function (btnComment) {
    //looking for the data id of the post that the comment belongs to
    var $clickedPost = $(btnComment).closest('.city');
    var id = $clickedPost.data().id;
    var cityPost = _findPostById(id); 
    //looking for the data id of the comment
    var $clickedcomment = $(btnComment).closest('.comment');
    var Cid = $clickedcomment.data().id;
    var comment = _findcommentById(post.comments,Cid);
    var indexOfComment=post.comments.indexOf(comment)
    post.comments.splice(indexOfComment,1);
    app.renderPosts();
    saveToLocalStorage();
  }

  $('.addCity').on('click', function () {
    var city = $('#searchByCity').val();
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
    weatherApi.fetch(city,searchtext);
    weatherrander.randerWeatherChat(currentWeb);
    currentWeb.saveToLocalStorage();
    
  });

  $('.results').on('click','.add-comment', function () {
    var cText=$(this).closest('div').find('.comment-text').val();
    var addto=_findPostById($(this).closest('.city').data().id);
    currentWeb.addComment(addto,cText);
    currentWeb.saveToLocalStorage();
  });

  $('.results').on('click','.remove-post', function () {
    //removePost(this);
    removePost(this);
    weatherrander.randerWeatherChat(currentWeb);
  });

   $('.results').on('click','.remove-comments', function () {
     removeComment(this);
     weatherrander.randerWeatherChat(currentWeb);
   });

 
   weatherrander.randerWeatherChat(currentWeb);
