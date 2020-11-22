function storyTone() {

    const storyCards = document.querySelectorAll('.card-body');

    for (let i = 0; i < storyCards.length; i++) {
        const story = storyCards[i];
        const sentValue = story.getAttribute('data-sentiment');

        if (sentValue <= -3) {
            story.classList.add('gradient1');
        } else if (sentValue > -3 && sentValue <= -0.5) {
            story.classList.add('gradient2');
        } else if (sentValue > -0.5 && sentValue <= 0) {
            story.classList.add('gradient3');
        } else if (sentValue > 0 && sentValue <= 2) {
            story.classList.add('gradient4');
        } else if (sentValue > 2 && sentValue <= 3) {
            story.classList.add('gradient5');
        } else if (sentValue > 3) {
            story.classList.add('gradient6');
        }
    }
}

storyTone();