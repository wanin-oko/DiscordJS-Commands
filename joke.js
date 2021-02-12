const Discord = require('discord.js');

module.exports = {
	name: 'joke',
    description: 'tells a joke',
    args: false,
    guildOnly: false, 
    cooldown: 1,
	execute(message, args,) {
        message.channel.send('Here goes:')
        var res = [
           "Why did the bike fall over? It was two tired.",
           "What’s the difference between the bird flu and the swine flu? One requires tweetment and the other an oinkment.",
           "Why do people say “break a leg” when you go on stage? Because every play has a cast.",
           "Why are there gates around cemeteries? Because people are dying to get in.",
           "When do computers overheat? When they need to vent.",
        ]
            message.channel.send((res[Math.floor(Math.random() * res.length)]))
        
    }} 