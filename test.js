const {
    MessageFlags,
    ReactionUserManager,
    MessageMentions
} = require("discord.js");

module.exports = {
    name: 'test',
    description: 'admin command dont use!', //oh yes spaghetti code mm
    args: true,
    guildOnly: false,
    cooldown: 1,
    usage: '<test string>',
    execute(message, args) {

        if (args[0] === '1') {
            message.channel.send('this is test')
        }

        if (args[0] === 'error') {
            dispatcher.pause(true)
            return
        }

        if (args[0] === 'ping') {
            message.channel.send(`${message.author}`)
            return
        }

        if (args[0] === 'info') {
            message.channel.send('Generic bot test file that tests different functions like perms')
            return
        }

        if (args[0] === 'perms') {
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                return message.channel.send(`Permission **MANAGE_ROLES** missing!`)
            } else {
                message.channel.send('Permission MANAGE_ROLES OK')
            }

            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return message.channel.send(`Permission **ADMINISTRATOR** missing!`)
            } else {
                message.channel.send('Permission ADMINISTRATOR OK')
            }

            if (!message.guild.me.hasPermission("ATTACH_FILES")) {
                return message.channel.send(`Permission **ATTACH_FILES** missing!`)
            } else {
                message.channel.send('Permission ATTACH_FILES OK')
            }

            if (!message.guild.me.hasPermission("EMBED_LINKS")) {
                return message.channel.send(`Permission **EMBED_LINKS** missing!`)
            } else {
                message.channel.send('Permission EMBED_LINKS OK')
            }

            if (!message.guild.me.hasPermission("CONNECT")) {
                return message.channel.send(`Permission **EMBED_LINKS** missing!`)
            } else {
                message.channel.send('Permission CONNECT OK')
            }

            if (!message.guild.me.hasPermission("SPEAK")) {
                return message.channel.send(`Permission **EMBED_LINKS** missing!`)
            } else {
                message.channel.send('Permission SPEAK OK')
            }
            return
        }
    },
};