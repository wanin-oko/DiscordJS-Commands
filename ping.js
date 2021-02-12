module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 10,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};

