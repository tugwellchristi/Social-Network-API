const { Thought, Reaction } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = Thought.findOne({ _id: req.params.thoughtId })
            .populate({
                path: 'reactions',
                select: '-__v',
            })

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'})
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Post a thought
    async postThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }, 

    // Update a thought 
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'});
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    }, 
    
    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'});
            }
            res.json({ message: 'Thought has been deleted'})
        } catch (error) {
            res.status(500).json(error);
        }
    },
};