// const Author = require('../models/Author');
// const sequelize = require('../config/connection');

// const authorData = [
//     {
//         username: 'nedstark',
//         email: 'ned@winterfell.com',
//         password: 'winteriscoming',
//         title: 'Warden of the North',
//         bio: 'His dark grey eyes reflect his moods, turning soft as fog or hard as stone. Eddard is shorter and less handsome than his older brother Brandon had been, according to Catelyn Stark; however, she also states that Ned has a "good sweet heart beneath his solemn face". He keeps faith with the old gods. He is fiercely protective of his wife and children, whom he loves deeply.'
//     },
//     {
//         username: 'king_slayer',
//         email: 'jaime@casterlyrock.com',
//         password: 'brienne',
//         title: 'Lord Commander of the Kingsguard',
//         bio: "Raised at the age of fifteen to the Kingsguard of the Mad King, Aerys II Targaryen, Jaime became the youngest member in the history of the prestigious knightly order.[7] He earned the derogatory nickname \"Kingslayer\" when he treasonously slew Aerys near the end of Robert's Rebellion."
//     },
//     {
//         username: 'stormborn',
//         email: 'daenerys@targaryen.com',
//         password: 'wherearemydragons',
//         title: 'Mother of Dragons',
//         bio: 'Princess Daenerys Targaryen, also known as Daenerys Stormborn,[1] is one of the last confirmed members of House Targaryen, along with her older brother Viserys, who refers to her as Dany.[1][15] She is the youngest child of King Aerys II Targaryen and his sister-wife, Queen Rhaella.'
//     },
//     {
//         username: 'hodor',
//         email: 'hodor@hodor.com',
//         password: 'hodorhodor',
//         title: 'Hodor Hodor',
//         bio: 'Hodor is large and slow of wits, but is gentle and loyal to the Stark family. He is only capable of saying one word, Hodor.[3] The Stark children believed this to be his name, until enlightened by Old Nan, his great-grandmother, that his real name is Walder.'
//     },
//     {
//         username: 'snowbro',
//         email: 'jon@thewall.com',
//         password: 'ghost',
//         title: "Lord Commander of the Night's Watch",
//         bio: "Unaware of the identity of his mother,[9] Jon was raised at Winterfell. At the age of fourteen, he joins the Night's Watch, where he earns the nickname Lord Snow."
//     }
// ];

// sequelize
//     .sync({ force: true })
//     .then(() => {
//         return Author.bulkCreate(authorData);
//     })
//     .then(authorData => {
//         console.log('\n Authors seeded!');
//         process.exit(0);
//     })
//     .catch(err => {
//         console.log(err);
//         process.exit(1);
//     });
