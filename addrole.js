module.exports = {
        name: 'addrole',
        description: 'Roles!',
        args: false,
        guildOnly: false,
        cooldown: 1,
        usage: '<user> <role>',
        execute(message, args) {
                if (!message.member.hasPermission("MANAGE_ROLES")) {
                        return message.channel.send(`**${message.author.username}**, You do not have perms to mute someone`)
                }

                if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                        return message.channel.send(`**${message.author.username}**, I do not have perms to mute someone`)
                }
                if (args[1] === args[1]) {
                        let role = message.guild.roles.cache.find(r => r.name === args[1]);

                        let member = message.mentions.members.first();
                        member.roles.add(role)
                        if (!role) return message.channel.send("Role doesen't exist.");
                        if (role) return message.channel.send('Role added!')
                }

        }
}