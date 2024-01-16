const { Thought, Reaction } = require('../models');

module.exports = {
    // Create a reaction
    async createReaction(req, res) {
        try {
            const reaction = await Reaction.create(
                {
                    ...req.body,
                    thoughtId: req.params.thoughtId,
                });
            await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: reaction._id } },
                { new: true }
            );
            res.json(reaction);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    // Delete a reaction
    async deleteReaction(req, res) {
        try {
            const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });
                
            if (!reaction) {
                return res.status(404).json({ message: 'No reaction with that ID'})
            }

            await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, 
                { $pull: { reactions: req.params.reactionId } },
                { new: true }
            );

            res.json({ message: 'Reaction has been deleted'});
        } catch (error) {
            res.status(500).json(error);
        }
    },
};