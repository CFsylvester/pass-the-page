// Dependencies
// =============================================================
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Enable session
const sess = {
    secret: 'frodo',
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Enable Handlebars as template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Starts the server to begin listening
// =============================================================
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`\n ===== App listening on PORT ${PORT} ===== \n`);
    });
});