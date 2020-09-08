const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "6",
  description: "Faq Number 6",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Question - I found a typo where i can report it?")
  .setColor("BLUE")
  .setDescription(`just type -report Found typo to report it`) //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}