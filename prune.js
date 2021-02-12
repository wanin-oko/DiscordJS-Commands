module.exports = {
	name: 'prune',
	description: 'prune!',
	args: true,
	usage: '<amount>',
	execute(message, args) {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			return
		}

		if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
			return
		}
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount < 2 || amount > 100) {
		} message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
}