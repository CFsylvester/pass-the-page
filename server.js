// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
// const sequelize = require('./config/connection');
const routes = require('./controllers');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Static directory
// app.use(express.static('public'));
app.use(routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars'); 

// Starts the server to begin listening
// =============================================================
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, function() {
//         console.log('App listening on PORT ' + PORT);
//     });
// });

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});