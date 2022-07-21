const { DiscordAPIError } = require("discord.js");
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);



        if (!queue) return message.channel.send(`No music currently playing ${message.author}... try again ? <a:No_1:999332118368891010>`);

        const success = queue.setPaused(true);
        const dgrgdv = new MessageEmbed()
            .setColor('#da004e')
            .setDescription(success ? `Current music ${queue.current.title} paused<a:swartik:988048652901699584>` : `Something went wrong ${message.author}... try again ? <a:No_1:999332118368891010>`);
        return message.channel.send({embeds:  [dgrgdv]})
    }
};