const seedChapters = require('./chapter-seeds');
const seedAuthors = require('./author-seeds'); 

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('-----------------');

    await seedAuthors();
    console.log('Authors seeded');

    await seedChapters();
    console.log('Chapters seeded');

    process.exit(0); 
};

seedAll(); 