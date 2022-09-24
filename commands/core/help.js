const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        module.exports = {
    name: 'avatar',
    description: 'avatar',
    aliases: ['av'],
    cooldown: 5,
    async execute(message, args) {
       let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
       let avatar = member.displayAvatarURL({ size: 1024, dynamic: true });

       const embed = new Discord.MessageEmbed()
        .setAuthor(avatar, message.username)
        .setTitle(`User Avatar`)
        .setImage(avatar)
        .setColor("BLACK")
        .setAuthor(member.username, avatar, avatar);
        message.channel.send(embed);
    },
};
        const embed = new MessageEmbed()
        .setTitle(`<a:kopkop:988045866373877880> **SWAR MUSIC COMMANDS** <a:kopkop:988045866373877880>`)
        .setColor('RANDOM')
        .setDescription(`ping • back (previous) • clear (cq) • filter • loop (lp, repeat) • nowplaying (np) • pause • play (p) • progress (pbar) • queue (q) • resume (rs) • save (sv) • search (sh) • seek • shuffle (sh) • skip (sk) • stop (dc) • volume (vol)`)
        .setTimestamp()
       // .setFooter("Made by appy")
        .setThumbnail('https://i.pinimg.com/originals/71/21/29/712129d48c17029cfd2bd99bf6a4ee10.gif')
        message.channel.send({ embeds: [embed] });
    },
};                          