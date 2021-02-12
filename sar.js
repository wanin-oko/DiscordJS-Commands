module.exports = {
    name: 'sar',
    description: 'self assigned roles!',
    cooldown: 10,
    args: true,
    usage: '<action> <role>',
    execute(message, args) {

        if (args[0] == 'add') {
            if (args[1]) {
                if (args[1] == '') {
                    var role = message.guild.roles.cache.find(r => r.name === args[1]);

                    var member = message.member;
                    member.roles.add(role);
                    if (!role) return message.channel.send("Role doesen't exist.");
                    if (role) return message.channel.send('Role added!');
                }
                return message.channel.send("Role doesen't exist / I cant add that Role");
            }
        }

        if (args[0] == 'remove') {
            if (args[1]) {
                if (args[1] == 'red' || args[1] == 'blue' || args[1] == 'yellow' || args[1] == 'green' || args[1] == 'orange' || args[1] == 'pink' || args[1] == 'purple' || args[1] == 'white' || args[1] == 'black') {
                    var role = message.guild.roles.cache.find(r => r.name === args[1]);

                    var member = message.member;
                    member.roles.remove(role);
                    if (!role) return message.channel.send("Role doesen't exist.");
                    if (role) return message.channel.send('Role Removed!');
                }
                message.channel.send("Role doesen't exist / I cant add that Role");
            }

        }


        message.channel.send('Please provide valid arguments')




    }
}
