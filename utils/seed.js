const connection = require('../config/connection');
const { userData, thoughtData, reactionData } = require('./data');
const { User, Thought, Reaction } = require('../models');
// const thoughtController = require('../controllers/thoughtController');

connection.on('error', (error) => console.error('MongoDB connection error:', error));

connection.once('open', async () => {
    try {
        console.log('Connected to MongoDB');

        // Clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});
        await Reaction.deleteMany({});
        
        // Seed users
        const users = await User.insertMany(userData);

        thoughtData.forEach((thought, index) => {
            thought.userId = users[index]._id;
        });

        // Seed thoughts
        const thoughts = await Thought.insertMany(thoughtData);

        reactionData.forEach((reaction, index) => {
            reaction.thoughtId = thoughts[index]._id;
        });

        // Seed reactions
        await Reaction.insertMany(reactionData);

        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        connection.close();
    }
});