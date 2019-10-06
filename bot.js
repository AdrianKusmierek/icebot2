// Calling the package
const Discord = require("discord.js")
const client = new Discord.Client﻿
const ownerID = '501122648806260740';
const ytdl = require('ytdl-core');
const request = require('request');
const async = require('async');
const fs = require('fs');
const ffmpeg = require("ffmpeg");
const prefix = '\\';


const commandsList = (fs.readFileSync('Storage/commands.txt', 'utf8'));
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Functions
function userInfo(user) {
    var finalString = '';

    // name.
    finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**';

    // At date.
    var userCreated = user.createdAt.toString().split(' ');
    finalString += ', was **created on ' + userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3] + '.**'

    // Messages sent.
    finalString += ' Since then, they have sent ' + userData[user.id].messagesSent + ' messages to this discord server.'

    return finalString;
}


// listener event: message received
client.on("message", async message => {


    // variables
    let msg = message.content.toUpperCase(); 
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" ");
    let args = message.content.slice(prefix.length).split(/ +/);
    var swear = ["FUCKER", "IDIOT", "LOSER", "MOTHER FUCKER", "BITCH", "BREAD"];
	
    if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if (!message.content.startsWith(prefix)) return;
	
	var cmd = client.commands.get(cont[0])
	var command = args.shift().toLowerCase();
	var randomnumber = Math.floor(Math.random()*2);;
	

   
    // first we need to make sure that it isn't reading a message that the bot is sending
    if (sender.id === '579969907924533259') {
        return;
    }
	
	 // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (msg === prefix + 'JOIN') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }

    // Help command
    if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS') {
        message.channel.send(commandsList)
		message.delete({timeout: 1000});
    }
	
    if (command === 'ping') {
	message.channel.send('Pong!');
    }
	
    if (msg.startsWith(prefix + 'FF')) {
		message.channel.send(randomnumber)
    }	
	
    if (msg.startsWith(prefix + 'Secret')) {
	    message.channel.send('Fuck off. It\'s secret.')
    
    if (command === 'gm') {
	    message.channel.send('Good Morning **' + message.member.user.tag + '** !!https://img.etimg.com/thumb/msid-67055775,width-643,imgsize-709079,resizemode-4/coffeebeans.jpg');
	    message.delete({timeout: 1000});
    }
	
	if (command === 'itinfo') {
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
	
    if (command === 'info') {
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
                     value: "U zult het openbare script [hier](https://github.com/AdrianKusmierek/IceTopia-Bot/) kunnen vinden."
                     }
                  ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Adrian"
                  }
                }
				 });
    }
				 
	
	if(command === 'ban') {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Owner", "Moderator", "MC-staff", "Helper", "Programmeur", "Admin", "Lead-Moderator", "Head-Admin"].includes(r.name)) )
      return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.channel.send(`${member.user.tag} has been banned because: ${reason}`);
		message.delete({timeout: 1000});
  }
	
	if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Owner", "Moderator", "MC-staff", "Helper", "Programmeur", "Admin", "Lead-Moderator", "Head-Admin"].includes(r.name)) )
      return message.channel.send("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.tag} has been kicked because: ${reason}`);

  }
	
	if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 10000.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
      return message.reply("Please provide a number between 1 and 10000 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

    if (message.channel.id === '579779890052595743') {
        if (isNaN(message.content)) {
        message.delete()
        message.author.send('Only send numbers please.')
    }
}

if (msg.swear.includes()) {
    message.delete();
    message.author.send('Please prevent yourself from swearing.')
}




	
if (msg.startsWith(prefix + 'EVENT')) {
	       const color = args[0]
           const text = args.slice(0).join(" ");
           if (text.length < 1) return message.channel.send("Can not make an event of nothing");
           const embed = new Discord.RichEmbed()
           .setColor(0xff6300)
           .setTitle("Event")
           .setDescription(text);
           message.channel.send({embed})
     message.delete({timeout: 1000});	
}
	
	if (msg.startsWith(prefix + 'WARN')) {
	       const color = args[0]
           const text = args.slice(0).join(" ");
           if (text.length < 1) return message.channel.send("Can not make an event of nothing");
           const embed = new Discord.RichEmbed()
           .setColor(0xff0000)
           .setTitle("Warning")
           .setDescription(text);
           message.channel.send({embed})
     message.delete({timeout: 1000});	
}
	
	 if (msg.startsWith(prefix + 'REG')) {
           const color = args[0]
           const text = args.slice(0).join(" ");
           if (text.length < 1) return message.channel.send("Can not announce nothing");
           const embed = new Discord.RichEmbed()
           .setColor(0xffffff)
           .setTitle("Regels")
	   .setFooter("IceTopia Staff Crew")
           .setDescription(text);
           message.channel.send({embed})
     message.delete({timeout: 1000});
   }
	
if (msg.startsWith(prefix + 'MELD')) {
	       const color = args[0]
           const text = args.slice(0).join(" ");
           if (text.length < 1) return message.channel.send("Can not make an event of nothing");
           const embed = new Discord.RichEmbed()
           .setColor(0x0000ff)
           .setTitle("Melding")
           .setDescription(text);
           message.channel.send({embed})
     message.delete({timeout: 1000});	
}
	
	if (msg.startsWith(prefix + 'IP')) {
           const color = args[0]
           const embed = new Discord.RichEmbed()
           .setColor(0xff0000)
           .setTitle("Internet Protocol Adress")
           .setDescription("**IceTopia_MGWG.aternos.me**")
	   .setFooter("1.12.2");
           message.channel.send({embed})
     message.delete({timeout: 1000});
   }
	
   
   
   if (msg.startsWith(prefix + 'CLEAR')) {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
	   }
    }
   
   
	
};
});


// Listener Event: Bot Lauched
client.once('ready', () => {
 console.log('Ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});

client.on('ready', () => {
	
	 // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
	
    console.log('Bot Lauched...') // Runs when the bot is Launched


    client.user.setStatus('Online')
    client.user.setPresence({
        game: {
            name: '\\help',
            type: "Playing",
            url: "https://discordapp.com/"
        }
    });
	
});

client.on('guildMemberAdd', member => {

    console.log('User ' + member.username + ' has joined the server!')

    

    member.guild.channels.get('583971779446439937').send('Welcome **' + member.user.username + '**!!')

});

    client.on('guildMemberRemove', member => {

        member.guild.channels.get('583971779446439937').send('**' + member.user.username + '**, has left the server!');

});



// Login
client.login(process.env.BOT_TOKEN)
