
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {

        const HJDDJ = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(success ? `Current music ${queue.current.title} skipped <a:swartik:988048652901699584>` : `Something went wrong ${message.author}... try again ? ❌`);
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        const success = queue.skip();

        return message.channel.send({ embeds: [HJDDJ] });
    },
};