module.exports = {
    name: 'verify',
    description: 'Ping!',
    cooldown: 10,
    execute(message, args) {
        if (args[0] == "trans") {
            if (args[1] == "rights") {
                //if (control == true) {
                message.delete()
                var role = message.guild.roles.cache.find(r => r.name === "red");
                var member = message.member;
                member.roles.add(role);
                message.delete()
                message.channel.type === (`"dm"`) + message.author.send(`hi`)
            } else return
        } else return
    },
};

