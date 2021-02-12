const axios = require('axios').default;
module.exports = {
	name: 'femboy',
	cooldown: 10,
    async execute(message, args) {
        let argies = args.join("+");

try {

    message.channel.send('Please be patient i am scanning for femboys. I will ping you when im done')
        //console.log('test')
        var argies = args.join("+");
        var d = 1;
        var resp = await axios.get(`https://e621.net/posts.json?tags=rating:s+femboy+${argies}&limit=99999`).then(async function (resp) {
            console.log(resp.data.posts.length)
            for (i = 320; i = resp.data.posts.length;) {
                resp = await axios.get(`https://e621.net/posts.json?tags=rating:s+order:score+femboy+${argies}&limit=99999&page=${d}`)
                if (resp.data.posts.length < 320) {
                    var page = Math.floor(Math.random() * d) + 1;
                    var respo = await axios.get(`https://e621.net/posts.json?tags=rating:s+femboy+${argies}&limit=99999&page=${page}`)
                    let num = Math.floor(Math.random() * resp.data.posts.length) + 0;
                    message.channel.send(`${message.author} Got post **${num}** of **${resp.data.posts.length}** on page **${page}** of **${d}**`);
                    return message.channel.send(respo.data.posts[num].file.url)
                }
                d++;
            }
        })    

    } catch (error) {
            console.error(error);
            message.reply(`Couldnt find anything`);
        }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            /* console.log(resp.data.posts[num].file.url)
            const embed = new Discord.MessageEmbed()
            .addFields(
		        {name: 'Femboy', value: resp.data.posts[num].file.url },
            )
            .setTitle('free femboy')
            .setColor(0x5757BA)*/
    }}
