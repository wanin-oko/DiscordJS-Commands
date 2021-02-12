const Discord = require('discord.js');

module.exports = {
    name: 'dadjoke',
    description: 'tells a dad joke',
    args: false,
    guildOnly: false,
    cooldown: 1,
    execute(message, args,) {
        message.channel.send('Here goes:')
        var res = [
            //   "message.channel.send((res[Math.floor(Math.random() * res.length)]))",
            'Today, my son asked "Can I have a book mark?" and I burst into tears. 11 years old and he still doesnt know my name is Brian',
            "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.",
            "How do you make holy water? You boil the hell out of it.",
            "Did you know that jesus did fitness? Yeah he trained Crossfit",
            "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
            "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
            "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
            'The secret service isnt allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!',
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "What do you call someone with no body and no nose? Nobody knows.",
            "I ordered a chicken and an egg from Amazon. I’ll let you know",
            "What is the least spoken language in the world? Sign language",
            'My daughter screeched, "Daaaaaad, you havent listened to one word Ive said, have you!?" What a strange way to start a conversation with me...',
            "A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas. These are the pie rates of the Caribbean.",
            'My wife tried to unlatch our daughters car seat with one hand and said, "How do one armed mothers do it?" Without missing a beat I replied, "Single handedly.',
        ]
        message.channel.send((res[Math.floor(Math.random() * res.length)]))

    }
} 