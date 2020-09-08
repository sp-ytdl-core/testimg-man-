const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "2",
  description: "Faq Number 2",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Question - WWhat will be the prize of premium ")
  .setColor("BLUE")
  .setDescription(`Premium version is abailable for some servers whom accepted the risk`) //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}