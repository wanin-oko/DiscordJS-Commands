const Discord = require('discord.js');

module.exports = {
        name: 'unmute',
        description: 'unmute ppl!',
        args: false,
        guildOnly: false,
        cooldown: 1,
        usage: '<user>',
        execute(message, args) {
                if (args[0] === args[0]) {
                        let role = message.guild.roles.cache.find(r => r.name === 'muted');
                        let member = message.mentions.members.first();
                        member.roles.remove(role)
                        if (!role) return message.channel.send("Role doesen't exist.");
                        if (role) return message.channel.send('Unmuted!')
                }

        }
}