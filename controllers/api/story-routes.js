const router = require('express').Router();
const { Story } = require('../../models');

router.get('/', (req, res) => {
    Story.findAll()
        .then(dbStoryData => res.json(dbStoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Story.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbStoryData => {
            if (!dbStoryData) {
                res.status(404).json({ message: 'No story was found with this id!' });
                return;
            }
            res.json(dbStoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Story.create({
        completed: 0, 
        story_title: req.body.story_title,
        story_text: req.body.story_text,
        genre: req.body.genre,
        author_id: req.session.author_id
    })
        .then(dbStoryData => res.json(dbStoryData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Story.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbStoryData => {
            if (!dbStoryData) {
                res.status(404).json({ message: 'No story was found with this id!' });
                return;
            }
            res.json(dbStoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Story.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbStoryData => {
            if (!dbStoryData) {
                res.status(404).json({ message: 'No story was found with this id!' });
                return;
            }
            res.json(dbStoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;