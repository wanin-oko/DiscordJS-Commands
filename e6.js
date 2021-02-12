const Discord = require('discord.js');
const axios = require('axios').default;
module.exports = {
    name: 'e6t',
    cooldown: 10,
    async execute(message, args) {
        message.channel.send('Please be patient i am scanning e6. I will ping you when im done')
        var heh = args.join("+");
        var d = 1;
        var resp = await axios.get(`https://e621.net/posts.json?tags=rating:s+${heh}&limit=99999`).then(async function (resp) {
            for (i = 320; i = resp.data.posts.length;) {
                resp = await axios.get(`https://e621.net/posts.json?tags=rating:s+order:score+${heh}&limit=99999&page=${d}`)
                if (resp.data.posts.length < 320) {
                    var page = Math.floor(Math.random() * d) + 1;
                    var respo = await axios.get(`https://e621.net/posts.json?tags=rating:s+${heh}&limit=99999&page=${page}`)
                    let num = Math.floor(Math.random() * resp.data.posts.length) + 0;
                    message.channel.send(`${message.author} Got post **${num}** of **${resp.data.posts.length}** on page **${page}** of **${d}**`);
                    return message.channel.send(respo.data.posts[num].file.url)
                }
                d++;
            }
        })
    }
}