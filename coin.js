const Discord = require('discord.js');

module.exports = {
    name: 'coin',
    description: 'flip a coin',
    args: false,
    guildOnly: false,
    cooldown: 1,
    execute(message, args,) {
        var res = [
            "Heads!",
            "Tails!",
        ]

        message.channel.send((res[Math.floor(Math.random() * res.length)]))
    }
}