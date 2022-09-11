const maxVol = client.config.opt.maxVol;
const { MessageEmbed, DiscordAPIError } = require('discord.js');
module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const voll = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`The volume you wanna set is already the current volume dumbo ${message.author} <a:No_1:999332118368891010>`);
        const hfjs = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Enter a valid number between 1-100 ${message.author}<a:No_1:999332118368891010>`);
        const ksnck = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`No music currently playing ${message.author}... try again ? <a:No_1:999332118368891010>`);

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ embeds: [ksnck] });

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`The current volume is ${queue.volume} 🔊\n*To change the volume enter a valid number between **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send({ embeds: [voll] });

        if (vol < 0 || vol > maxVol) return message.channel.send({ embeds: [hfjs] });

        const success = queue.setVolume(vol);
        const sds = new MessageEmbed()
            .setColor('#da004e')
            .setDescription(success ? `The volume has been modified to **${vol}**/**${maxVol}**% <a:str_music:999330140859404388>` : `Something went wrong ${message.author}... try again ? <a:No_1:999332118368891010>`);

        return message.channel.send({ embeds: [sds] });
    },
};