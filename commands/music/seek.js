const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {

        if (message.content == ">>seek") {
            message.channel.send(`**This command is under maintenance**${message.author}`);
        }

        /*
     const queue = player.getQueue(message.guild.id);

     if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? <a:No_1:999332118368891010>`);

     const timeToMS = ms(args.join(' '));

     if (timeToMS >= queue.current.durationMS) return message.channel.send(`The indicated time is higher than the total time of the current song ${message.author}... try again ? <a:No_1:999332118368891010>\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`);

     await queue.seek(timeToMS);

     message.channel.send(`Time set on the current song **${ms(timeToMS, { long: true })}** ✅`);*/
    },
};