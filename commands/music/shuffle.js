module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ?<a:No_1:999332118368891010>`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue after the current one ${message.author}... try again ?<a:No_1:999332118368891010>`);

        await queue.shuffle();

        return message.channel.send(`Queue shuffled **${queue.tracks.length}** song(s) ! ✅`);
    },
};