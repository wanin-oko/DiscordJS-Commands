const Discord = require('discord.js');
module.exports = {
    name: 'info',
    description: 'version',
    guildOnly: false,
    usage: '<blank>',
    cooldown: 1,
    args: false,
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Bot Version')
            .addFields(
                { name: 'Version', value: '0.4.2' },
                { name: 'WIP', value: ' !!!!! THIS IS A WIP !!!!!' },
                { name: 'Feedback', value: 'If you notice any errors or bugs pls dm Arge#3793 with the details' }
            )
            .setTimestamp();

        message.channel.send(exampleEmbed);
    }
}