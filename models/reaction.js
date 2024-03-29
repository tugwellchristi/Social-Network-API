const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        }, 
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = mongoose.model('Reaction', reactionSchema);