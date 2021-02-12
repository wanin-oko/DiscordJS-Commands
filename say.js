module.exports = {
	name: 'say',
	description: 'teypes text!',
    cooldown: 10,
    args: true,
	execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        let heh = args.join(" ");
        message.channel.send(`${heh}`);
        message.delete().catch(error => {
           if (error.code !== 10008) {
               console.error('Failed to delete the message:', error);
           }
            });
    },
};

