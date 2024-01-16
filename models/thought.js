const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        }],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = model('Thought', thoughtSchema);