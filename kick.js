module.exports = {
  name: 'kick',
  description: 'kick members!',
  args: true,
  guildOnly: true,
  cooldown: 1,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
    let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!User) return message.channel.send("Invalid User")
    if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
    let kickReason = args.join(" ").slice(22);
    if (!kickReason) {
      kickReason = "None"
    }

    User.kick({ reason: kickReason })
    message.channel.send(`${args[0]} has been kicked by ${message.author}`);


  }

}