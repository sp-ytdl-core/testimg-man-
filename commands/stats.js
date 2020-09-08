const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");
const ms = require("ms")


module.exports = {
  name: "stats",
  description: "Get the detailed information of bot",
  execute(client, message, args) {
    console.log(client.queue.size)
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setAuthor(`STATS AND INFORMATION`)
    .setDescription(`Main node up`)
    .addField("UPTIME", ms(client.uptime), true)
    .addField("STATUS", client.user.presence.status, true)
    message.channel.send(embed)
  }
};
