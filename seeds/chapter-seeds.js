const { Chapter } = require('../models');

const chapterdata = [
    {
        chapter_text: 'The Man Who Passes The Sentence Should Swing The Sword.',
        author_id: 1,
        story_id: 1
    },
    {
        chapter_text: 'It was that white cloak that soiled me, not the other way around.',
        author_id: 2,
        story_id: 1
    },
    {
        chapter_text: 'All men must die, but we are not men.',
        author_id: 3,
        story_id: 1
    },
    {
        chapter_text: 'Hodor. Hodor....',
        author_id: 4,
        story_id: 1
    },
    {
        chapter_text: 'Love Is The Death Of Duty.',
        author_id: 5,
        story_id: 1
    },
];

const seedChapters = () => Chapter.bulkCreate(chapterdata);

module.exports = seedChapters; 