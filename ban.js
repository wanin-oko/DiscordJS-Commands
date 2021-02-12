module.exports = {
  name: 'ban',
  description: 'ban ppl!',
  args: true,
  guildOnly: true,
  cooldown: 1,
  usage: '<member> <reason>',
  execute(message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!user) return message.channel.send("Invalid User")
    if (user.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
    let banReason = args.join(" ").slice(22);
    if (!banReason) {
      banReason = "None"
    }

    user.ban({ reason: banReason })
    message.channel.send(`${args[0]} has been banned by ${message.author}`);
    console.log(`${message.author} Banned ${user.username || user.id || user}`)
  }
}