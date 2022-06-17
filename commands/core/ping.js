const ms = require('ms');
const { MessageEmbed } = require('discord.js');
/*rgregregerg*/
module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message, Discord) {

        // msg.delete()
        const lil = new MessageEmbed()

            .setDescription("**STATUS**")
            .addField('Message Latency🎈', `${Date.now() - message.createdTimestamp}ms`)
            .addField('API Latency🎈', `${client.ws.ping}ms`)
            .setTimestamp()
        message.channel.send({ embeds: [lil] });

    },
};