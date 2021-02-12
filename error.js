module.exports = {
    name: 'error',
    description: 'generates error!',
    args: false,
    guildOnly: false,
    cooldown: 1,
    usage: ' ',
    execute(message, args) {
        dispatcher.pause(true);
    },
};