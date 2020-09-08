const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "4",
  description: "Faq Number 4",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Question - What stuff will next update contain? ")
  .setColor("BLUE")
  .setDescription(`Well it will be updating giveaway command, music command etc and it is confirimed by <@702734427419181096>`) //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}