const Discord = require('discord.js');
module.exports = {
    name: 'ddos',
    args: true,
    execute(message, args) {
        let heh = args.join(" ");
        message.channel.send(`${heh}`)
        message.channel.send(`${heh}`)
        message.channel.send(`${heh}`)
        message.channel.send(`${heh}`)
        message.channel.send(`${heh}`)
        message.channel.send(`${heh}`)

    }
}
