module.exports.run = async (client, message, args) => {

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Info",
    description: "Dit is alles wat u moet weten over de IceTopia Bot.",
    fields: [{
        name: "Ontwikkelaar",
        value: "De trotse ontwikkelaar van de IceTopia Bot is Adrian Kuśmierek."
      },
      {
        name: "Ontwikkeling",
        value: "De IceTopia Bot is gecreëerd op 25/6/2019 en wordt sindsdien ontwikkeld."
      },
      {
        name: "Website",
        value: "Als je mee wilt helpen met de ontwikkeling van de IceTopia Bot, ga naar de [IceTopia Project website](https://sites.google.com/view/icetopia-project/home)."
      },
      {
        name: "GitHub",
        value: "U zult het openbare script [hier](https://github.com/AdrianKusmierek/icebot2/) kunnen vinden."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Adrian"
    }
  }
});
message.delete({timeout: 1000});

}

module.exports.config = {
	command: 'info'
}
