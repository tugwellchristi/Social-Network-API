const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    postThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

const {
    createReaction,
    deleteReaction,
} = require('../../controllers/reactionController');

// /api/thoughts
router.route('/').get(getThoughts)

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .post(postThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router;