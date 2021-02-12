module.exports = {
	name: 'yourmom',
    description: 'tells a your mom joke',
    args: false,
    guildOnly: false, 
    cooldown: 1,
	execute(message, args,) {
        var res = [
           "Yo mama's so fat, I swerved to miss her in my car and ran out of gas.",
           "Yo mama's so fat, when she skips a meal, the stock market drops",
           "Yo mama's so stupid, when I told her that she lost her mind, she went looking for it",
           "Yo mama's so stupid, she thought a quarterback was a refund",
           "Yo mama's so ugly, her birth certificate is an apology letter",
           "Yo mama's so ugly, she made a blind kid cry",
        ]
            message.channel.send((res[Math.floor(Math.random() * res.length)]))
        
    }} 