module.exports = {
	name: 'template',
    description: 'Template!',
    args: false,
    guildOnly: false, 
    cooldown: 1,
    usage: '<none>',
    aliases: 'T',
	execute(message, args) {
        message.channel.send('Arge has got to get off his lazy ass and program this');
	},
};