const Author = require('./Author');
const Chapter = require('./Chapter');
const Story = require('./Story');

// Associations

Author.hasMany(Story, {
    foreignKey: 'author_id'
});

Author.hasMany(Chapter, {
    foreignKey: 'author_id'
});
//reverse
Chapter.belongsTo(Author, {
    foreignKey: 'author_id'
});

Chapter.belongsTo(Story, {
    foreignKey: 'story_id'
});

Story.hasMany(Chapter, {
    foreignKey: 'story_id'
});

//Newly Added
Story.belongsTo(Author, {
    foreignKey: 'author_id'
});

module.exports = { Author, Chapter, Story };