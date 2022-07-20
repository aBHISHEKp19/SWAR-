const maxVol = client.config.opt.maxVol;
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
   
     
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? <a:No_1:999332118368891010>`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`The current volume is ${queue.volume} 🔊\n*To change the volume enter a valid number between **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`The volume you want to change is already the current one ${message.author}... try again ? <a:No_1:999332118368891010>`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`The specified number is not valid. Enter a number between **1** and **${maxVol}** ${message.author}... try again ? <a:No_1:999332118368891010>`);

        const success = queue.setVolume(vol);
        const sds = new MessageEmbed()
        .setColor('#da004e')
        .setDescription(success ? `The volume has been modified to **${vol}**/**${maxVol}**% <a:str_music:999330140859404388>` : `Something went wrong ${message.author}... try again ? <a:No_1:999332118368891010>`);

        return message.channel.send({ embeds: [sds] });
    },
};