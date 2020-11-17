const router = require('express').Router();
const { Chapter } = require('../../models');

router.get('/', (req, res) => {
    Chapter.findAll()
      .then(dbChapterData => res.json(dbChapterData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
router.post('/', (req, res) => {
    Chapter.create({
      chapter_text: req.body.chapter_text,
      author_id: req.body.author_id,
      story_id: req.body.story_id
    })
      .then(dbChapterData => res.json(dbChapterData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});
  
router.delete('/:id', (req, res) => {
    Chapter.destroy({
        where: {
            id: req.params.id
        }
    })
      .then(dbChapterData => {
        if (!dbChapterData) {
            res.status(404).json({ message: 'No chapter found with this id!' });
            return;
        }
        res.json(dbChapterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
module.exports = router;