const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        const llol = new Discord.Messagembed()
        .setDescription('')

        if (!queue) return message.channel.send(`No music currently playing ${message.author}... try again ? <a:No_1:999332118368891010>`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Current music ${queue.current.title} paused ✅` : `Something went wrong ${message.author}... try again ? <a:No_1:999332118368891010>`);
    },
};