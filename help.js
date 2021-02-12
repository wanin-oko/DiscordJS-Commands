const prefix = require('../config.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    usage: '<command name>',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const {
            commands
        } = message.client;

        if (!args.length) {
            data.push('Here\'s what you can tell me to do Human!:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can say \`${prefix}help [command name]\` to get info on a specific word!`);

            return message.author.send(data, {
                    split: true
                })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('what \'cha need help with, human?');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t tell you! Do you have DMs disabled?');
                })
        };

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('I don\'t know that word!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(`, `)}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, {
            split: true
        });


        // ...

    }
};
//whole lotta shit
//p exhausting 
//lol