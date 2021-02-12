module.exports = {
    name: 'ask',
    description: 'ask stuff',
    args: false,
    guildOnly: false,
    cooldown: 1,
    usage: '<question>',
    execute(message, args,) {
        var res = [
            "No",
            "Maybe",
            "Probably",
            "Probably not",
            "Yes",
        ]
        if (!args[0]) {
            message.channel.send('Please ask a question.')
            return;
        }
        message.channel.send((res[Math.floor(Math.random() * res.length)]))
    }
}