const User = require('./User');

// Associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});