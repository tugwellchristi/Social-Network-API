const userData = [
    {
        username: "unique_u",
        email: "unique_u@email.com",
    },
    {
        username: "bobby_m",
        email: "bobby_m@email.com",
    },
    {
        username: "sammy_sass",
        email: "sammy_sass@email.com",
    },
    {
        username: "jimmy_doe",
        email: "jimmy_doe@email.com",
    },
];

const thoughtData = [
    {
        thoughtText: "We eat pizza from the inside out",
        username: "unique_u",
        userId: "1",
    },
    {
        thoughtText: "The word ambiguous only has one meaning.",
        username: "bobby_m",
        userId: "2",
    },
    {
        thoughtText: "Outer space isn’t empty, it literally contains everything there is.",
        username: "sammy_sass",
        userId: "3",
    },
    {
        thoughtText: "How do vampires always look so neat and tidy if they can’t see themselves in the mirror?",
        username: "jimmy_doe",
        userId: "4",
    },
];

const reactionData = [
    {
        reactionBody: "Interesting!",
        username: "unique_u",
        thoughtId: "1",
    },
    {
        reactionBody: "No way!",
        username: "bobby_m",
        thoughtId: "2",
    },
    {
        reactionBody: "Whoa!",
        username: "sammy_sass",
        thoughtId: "3",
    },
    {
        reactionBody: "I'm perplexed!",
        username: "jimmy_doe",
        thoughtId: "4",
    },
];

module.exports = { userData, thoughtData, reactionData };