const { Story } = require('../models');

const storydata = [
    {
        story_title: 'Blood Betrayal',
        story_text: "The Great War was Won, The Last War is done, but winter is still here. Far from the ashes of King's Landing, The North remembers as it tries to rebuild... and beyond The Wall, the shadow of The Long Night still looms over those that do not kneel.",
        author_id: 2,
        completed: true
    },
    {
        story_title: 'Tangled Fate',
        story_text: "Arya Stark is missing. When Melisandre interprets that Arya is the princess who was promised and kidnaps her at a young age, Arya is raised by the red priestess in secret on Essos. How will a chance meeting with a thief from Kings Landing change her life when he agrees to take her to see the annual floating lights from the east?",
        author_id: 1,
        completed: true
    },
    {
        story_title: 'The Dragon Cub',
        story_text: "Jaime realises Jon's true idenity when visiting Winterfell, remembering a promised made to Rhaegar, Jaime and Jon enter the game of thrones together.",
        author_id: 3,
        completed: false
    },
    {
        story_title: 'Where it all begins',
        story_text: "This is where we begin in our long journey through the forgotten adventures. It all begins with Finn stumbling upon a secret room in the treehouse and finding some things that he may not have wanted to find. Quick story that will help you understand where it all begins.",
        author_id: 1,
        completed: false
    },
    {
        story_title: 'Gravitation',
        story_text: "They say that the Cave of Origin is where all things begin, and that Mt. Pyre is where all things end. It was at the Cave of Origin that I found my beginning. To think that I never thought that I would become a trainer.",
        author_id: 1,
        completed: false
    },
];

const seedStories = () => Story.bulkCreate(storydata);

module.exports = seedStories;