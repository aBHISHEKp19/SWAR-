const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const prefix = '>>';

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

client.on('messageCreate', message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    if (message.content == prefix + 'av') {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true });

        const embed = new Discord.MessageEmbed()
            .setTitle(`${member.user.username}'s Avatar`)
            .setImage(avatar)
            .setColor("BLACK")
            .setAuthor(member.user.username);
        message.channel.send({ embeds: [embed] });
    }
})
global.player = new Player(client, client.config.opt.discordPlayer);
require('dotenv').config();

require('./src/loader');
require('./src/events');

client.login(process.env.token);