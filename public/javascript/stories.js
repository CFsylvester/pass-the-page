// const analyzeText = require('../../utils/natural');

// const card = document.getElementById(`#card-${id}`);
// const storyText = document.getElementById(`#story-${id}`).textContent;


function storyTone() {

    const storyCards = [document.querySelector('.card-body')];


    for (let i = 0; i < storyCards.length; i++) {
        const story = storyCards[i];
        console.log('story:', story);
        const sentValue = story.getAttribute('data-sentiment');
        console.log('sentValue', sentValue);

        if (sentValue < -3) {
            story.classList.add('gradient1');
        } else if (sentValue > -3 && sentValue < -1) {
            story.classList.add('gradient2');
        } else if (sentValue > -1 && sentValue < 1) {
            story.classList.add('gradient3');
        } else if (sentValue > 1 && sentValue < 3) {
            story.classList.add('gradient4');
        } else if (sentValue > 3) {
            story.classList.add('gradient5');
        }



        // switch (sentValue) {
        //     case (sentValue < -3):
        //         storyText.classList.add('gradient1');
        //         break;
        //     case (sentValue > -3 && sentValue < -1):
        //         storyText.classList.add('gradient2');
        //         break;
        //     case (sentValue > -1 && sentValue < 1):
        //         storyText.classList.add('gradient3');
        //         break;
        //     case (sentValue > 1 && sentValue < 3):
        //         storyText.classList.add('gradient4');
        //         break;
        //     case (sentValue > 3 && sentValue < 5):
        //         storyText.classList.add('gradient5');
        //         break;
        // }
    }
}

storyTone();