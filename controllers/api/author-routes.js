const router = require('express').Router();
const { Author } = require('../../models');

// Get all authors
router.get('/', (req, res) => {
    Author.findAll({
        // attributes: { exclude: ['password'] }
    })
        .then(authorData => res.json(authorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get one author by id
router.get('/:id', (req, res) => {
    Author.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'username', 'title', 'bio']
    })
        .then(authorData => {
            if (!authorData) {
                res.status(404).json({ message: "We couldn't find that author." });
                return;
            }
            res.json(authorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create an author
router.post('/', (req, res) => {
    Author.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        title: req.body.title,
        bio: req.body.bio
    })
        .then(authorData => {
            req.session.save(() => {
                console.log(req.session);
                req.session.author_id = authorData.id;
                req.session.username = authorData.username;
                req.session.loggedIn = true;

                res.json(authorData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Login route
router.get('/login', (req, res) => {
    console.log('==================');
    res.render('login');
});



module.exports = router;