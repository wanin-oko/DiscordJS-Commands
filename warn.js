const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'warn',
	description: 'Ping!',
	cooldown: 10,
	execute(message, args) {
        var heh = args.join();
        if (!message.member.hasPermission("ADMINISTRATOR")){ 
        return message.channel.send("Invalid Permissions")
        }
        if (!args[0]){
            return message.channel.send('Please provide a valid user')
        }
        if (!args[1]){
            return message.channel.send('Please provide a reason')
        }
        let user = message.mentions.users.first();
        user.send(`You have been warned for reason: **${heh}**`);
        message.author.send(`Successfully warned ${args[0]}`)
        message.delete();
        

}}
