import {City} from './city.js';
import {Comment} from './comment.js';
import {currentWeb} from "./WeatherChatData.js";
import {weatherApi} from "./api.js";
import {weatherrander} from "./rander.js";

weatherrander.randerWeatherChat(currentWeb);

// SHould be opart of data . 
var _findPostById = function (id) {
    for (var i = 0; i < currentWeb.cities.length; i += 1) {
      if (currentWeb.cities[i].cityId === id) {
        return currentWeb.cities[i].comments;
      }
    }
  }
// SHould be part of data
  var _findIndexOfPostById = function (id) {
    for (var i = 0; i < currentWeb.cities.length; i += 1) {
      if (currentWeb.cities[i].cityId === id) {
        return i;
      }
    }
  }
// dhould be part of data
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
    // Only the data ayer should change the data!
      currentWeb.cities.splice(i, 1);
      
      
      // Only the render layer should render the view. And it should render it from the array and not randomly
    $clickedPost.remove();
      
      // Only the data layer should save data
    currentWeb.saveToLocalStorage();
      
      
      //Here you render the screen :)
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
    
    // Only the data layer should change the data
    post.comments.splice(indexOfComment,1);
    app.renderPosts();
      
      //Only the data layer sould save the data
    saveToLocalStorage();
  }

  $('.addCity').on('click', function () {
    var city = $('#searchByCity').val();
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
   // This call is async! You should use then / await 
    weatherApi.fetch(city,searchtext);
      
      // Render the screen only when the async function will return. Now it's useless
    weatherrander.randerWeatherChat(currentWeb);
      
      // Only the data layer should save 
    currentWeb.saveToLocalStorage();
    
  });

  $('.results').on('click','.add-comment', function () {
    var cText=$(this).closest('div').find('.comment-text').val();
    var addto=_findPostById($(this).closest('.city').data().id);
    currentWeb.addComment(addto,cText);
      
      // Only the data layer should save 
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
