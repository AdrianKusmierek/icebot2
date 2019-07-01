const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	
        const embed = new Discord.RichEmbed()
  .setTitle("Dit is alles wat u moet weten over de IceTopia Community.")
  .setAuthor("IceTopia", "https://i.imgur.com/SXL3FF6.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x0037ff)
  .setDescription("IceTopia is een openbaar community vol met vriendelijke leden.")
  .setFooter("IceTopia Community", "https://i.imgur.com/SXL3FF6.png")
  .setImage("https://i.imgur.com/JIyjCJV.jpg")
  .setThumbnail("https://i.imgur.com/SXL3FF6.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField("Deze community is aangemaakt door Loeki, de eigenaar van IceTopia.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Games", "MineCraft.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("MC Server Info", "De server heeft: 1024MB RAM; Plugin Support; en 101 player slots.", true);
 
  message.channel.send({embed});
	message.delete({timeout: 1000});
}

module.exports.config = {
	command: 'itinfo'
}
