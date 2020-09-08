const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "1",
  description: "Faq Number 1 ",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Question - WHY BOT IS LAGGING ")
  .setColor("RED")
  .setDescription(`May bot's Developers is restarting the bot, Or something else went wrong Please wait a while is is more than a hour then please tell the modrator of the server`) //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}