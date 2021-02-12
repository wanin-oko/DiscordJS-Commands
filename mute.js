const Discord = require('discord.js');

module.exports = {
        name: 'mute',
        description: 'mute ppl!',
        args: false,
        guildOnly: false,
        cooldown: 1,
        usage: '<user>',
        execute(message, args) {
                if (!msg.member.hasPermission("MANAGE_ROLES")) {
                        return msg.channel.send(`**${msg.author.username}**, You do not have perms to mute someone`)
                }

                if (!msg.guild.me.hasPermission("MANAGE_ROLES")) {
                        return msg.channel.send(`**${msg.author.username}**, I do not have perms to mute someone`)
                }
                if (args[0] === args[0]) {
                        let role = message.guild.roles.cache.find(r => r.name === 'muted');

                        let member = message.mentions.members.first();

                        member.roles.add(role)
                        if (!role) return message.channel.send("Role doesen't exist.");
                        if (role) return message.channel.send('Muted!')
                }

        }
}

