module.exports = {
    name: 'stop',
    aliases: ['dc', 'leave'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        /* const queue = player.getQueue(message.guild.id);
         const ddv = new MessageEmbed()
         .setColor('#da004e')*
         .setDescription(`Music stopped into this server, see you next time <a:swartik:988048652901699584>`);*/
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        queue.destroy();

        message.channel.send(`Music stopped into this server, see you next time <a:swartik:988048652901699584>`);
    },
};