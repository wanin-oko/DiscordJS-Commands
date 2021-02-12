const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
module.exports = {
    name: 'reddit',
    description: 'fetch reddit posts!',
    cooldown: 10,
    args: true,
    usage: '<subreddit without r/>',
    async execute(message, args) {

        try {
            const { body } = await snekfetch
                .get(`https://www.reddit.com/r/${args[0]}.json`)
                .query({ limit: 1000 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Either that SubReddit doesnt exist, or there is no more new stuff');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.MessageEmbed()
                .setColor(0x00A2E8)
                .setTitle(allowed[randomnumber].data.title)
                .setDescription(allowed[randomnumber].data.selftext)
                .setImage(allowed[randomnumber].data.url)
                .addField("Other info:", `Upvotes: ${allowed[randomnumber].data.ups} / Comments: ${allowed[randomnumber].data.num_comments}`)
                .setFooter("Posted by" + allowed[randomnumber].data.author)
            message.channel.send(embed)
        } catch (err) {
            message.channel.send(`${err}`) //404: Not found 99% of the time
            return console.log(err);

        }
    }
}