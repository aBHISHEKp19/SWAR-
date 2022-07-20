const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? <a:No_1:999332118368891010>`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`You must first disable the current music in the loop mode (${client.config.app.px}loop) ${message.author}... try again ? <a:No_1:999332118368891010>`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** the whole queue will be repeated endlessly 🔁` : `Something went wrong ${message.author}... try again ? <a:No_1:999332118368891010>`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must first disable the current queue in the loop mode (${client.config.app.px}loop queue) ${message.author}... try again ? <a:No_1:999332118368891010>`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** the current music will be repeated endlessly (you can loop the queue with the <queue> option) 🔂` : `Something went wrong ${message.author}... try again ? <a:No_1:999332118368891010>`);
        };
    },
};