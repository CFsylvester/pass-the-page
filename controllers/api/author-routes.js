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
router.post('/login', (req, res) => {
    console.log(`====== Logged in as ${req.session.username}! ======`);
    Author.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(authorData => {
            if (!authorData) {
                res.status(404).json({ message: `${authorData.username} isn't an existing user.` });
                return;
            }

            const validPw = authorData.checkPassword(req.body.password);

            if (!validPw) {
                res.status(400).json({ message: "Wrong password!" });
            }

            req.session.save(() => {
                req.ssession.author_id = authorData.author_id;
                req.sesssion.username = authorData.username;
                req.session.loggedIn = true;

                res.json({ user: authorData, message: `Logged in as ${authorData.username}.` });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Log out user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            console.log(`${req.session.username} logged out!`);
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Update a user's info
router.put('/:id', (req, res) => {
    Author.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
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

// Delete a user
router.delete('/:id', (req, res) => {
    Author.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(authorData => {
            if (!authorData) {
                res.status(404).json({ message: "We couldn't find that author." });
            }
            res.json(authorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;