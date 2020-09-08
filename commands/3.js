const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "3",
  description: "Faq Number 3",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Question - Why rank and welcome command lags ")
  .setColor("BLUE")
  .setDescription(`Cuse bot dose not have a good data base so it takes time of 16-20 seconds to do that stuff`) //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}