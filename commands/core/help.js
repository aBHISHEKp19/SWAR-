const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setTitle(`<a:kopkop:988045866373877880> **SWAR MUSIC COMMANDS** <a:kopkop:988045866373877880>`)
        .setColor('RANDOM')
        .setDescription(`ping • back (previous) • clear (cq) • filter • loop (lp, repeat) • nowplaying (np) • pause • play (p) • progress (pbar) • queue (q) • resume (rs) • save (sv) • search (sh) • seek • shuffle (sh) • skip (sk) • stop (dc) • volume (vol)`)
        .setTimestamp()
        .setFooter("Made by appy")
        .setThumbnail('https://i.pinimg.com/originals/71/21/29/712129d48c17029cfd2bd99bf6a4ee10.gif')
        message.channel.send({ embeds: [embed] });
    },
};                          