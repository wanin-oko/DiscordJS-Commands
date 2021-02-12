module.exports = {
    name: 'emote',
    description: 'enlarge emotes! ',
    cooldown: 10,
    args: true,
    usage: "<Emote>",
    execute(message, args) {
        const emojiid = message.content.match(/\b\d+/g)
        if (args[0]){
            message.channel.send(`https://cdn.discordapp.com/emojis/${emojiid}.png`)
        }
    }
}