module.exports.run = async (client, message, args) => {
	
	message.channel.send('Good Night **' + message.member.user.tag + '**!! http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/01/good-night-pictures-hd-download-14.jpg')
	message.delete({timeout: 1000});
	
}

module.exports.config = {
	command: 'gn'
}
