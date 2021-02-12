const Discord = require('discord.js');
module.exports = {
    name: 'aemote',
    description: 'enlarge animated emotes!',
    cooldown: 10,
    args: true,
    usage: '<emote>',
    execute(message, args) {
        const emojiid = message.content.match(/\b\d+/g)
        if (args[0])
            message.channel.send(`https://cdn.discordapp.com/emojis/${emojiid}.gif`)

    }
}