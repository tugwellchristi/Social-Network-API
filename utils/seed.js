const connection = require('../config/connection');
const { userData, thoughtData, reactionData } = require('./data');
const { User, Thought, Reaction } = require('../models');


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

        // Seed thoughts
        const thoughts = await Thought.insertMany(thoughtData);

        // Populate thoughtId for reactions
        reactionData.forEach((reaction, index) => {
            reaction.thoughtId = thoughts[index]._id;
        });

        // Seed reactions
        const reactions = await Reaction.insertMany(reactionData);

        // Populate friendId for users
        users.forEach(async (user) => {
            const friendIndex = (users.indexOf(user) + 1) % users.length;
            const friend = users[friendIndex];

            // Add friend to user's friend list
            await User.findByIdAndUpdate(user._id, { $addToSet: { friends: friend._id } });

            // Add user to friend's friend list
            await User.findByIdAndUpdate(friend._id, { $addToSet: { friends: user._id } });
        });

        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        connection.close();
    }
});