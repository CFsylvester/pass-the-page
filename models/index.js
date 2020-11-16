const Author = require('./Author');
const Chapter = require('./Chapter');

// Associations

// Author.hasMany(Story, {
//     foreignKey: 'author_id'
// });

Author.hasMany(Chapter, {
    foreignKey: 'author_id'
});
//reverse
Chapter.belongsTo(Author, {
    foreignKey: 'author_id'
});

// Chapter.belongsTo(Store, {
//     foreignKey: 'story_id'
// });

module.exports = { Author, Chapter };