const analyzeText = require('../../utils/natural');

const genreImg = document.getElementById(`#image-${id}`);
const story = document.getElementById(`#story-${id}`).textContent;

function sentiment(story) {
    analyzeText(story);

    console.log(value);
    return value;
}



switch (sentiment(story)) {
    case (value < -3):
        genreImg.setAttribute('src', '/src/adventure.png');
        break;
    case (value > -3 && value < -1):
        genreImg.setAttribute('src', '/src/adventure.png');
        break;
    case (value > -1 && value < 1):
        genreImg.setAttribute('src', '/src/adventure.png');
        break;
    case (value > 1 && value < 3):
        genreImg.setAttribute('src', '/src/adventure.png');
        break;
    case (value > 3 && value < 5):
        genreImg.setAttribute('src', '/src/adventure.png');
        break;
}