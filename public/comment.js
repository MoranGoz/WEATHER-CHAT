import {currentWeb} from "./WeatherChatData.js";
import {City} from './city.js';


class Comment {
    constructor(text,commentId) {
        this.text = text;
        this.commentId = commentId;
    }
}
export {Comment};