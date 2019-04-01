const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562350117164679178")
setInterval(function() {
channel.send(`سبام كريديت احم برو بوت proo Credit xd 165465649494949498498489498498848944898984`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
