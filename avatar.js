module.exports = {
    name: 'avatar',
    description: 'avatar',
    args: false,
    guildOnly: false,
    cooldown: 1,
    usage: '<user> (leave blank if for own avatar)',
    execute(message, args) {
        message.channel.send('I Took a Picture of you human, look!');
        if (!message.mentions.users.size) {
            return message.channel.send(`<${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `<${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        message.channel.send(avatarList);
    }

}