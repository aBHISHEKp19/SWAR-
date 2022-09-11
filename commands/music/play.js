const { QueryType } = require('discord-player');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
       // const athr = message.author.id;


        const neh = new MessageEmbed()
        .setColor('#da004e')
        .setDescription((`${message.author} Please enter a valid search <a:No_1:999332118368891010>`));
        
        if (!args[0]) return message.channel.send({ embeds: [neh] });

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        const hyh = new MessageEmbed()
        .setColor('#da004e')
        .setDescription(`No results found ${message.author}... try again ? <a:No_1:999332118368891010>`);
        if (!res || !res.tracks.length) return message.channel.send({ embeds: [hyh] });

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`I can't join the voice channel ${message.author}... try again ? <a:No_1:999332118368891010>`);
        }
        const acv = new MessageEmbed()
        .setColor('#da004e')
        .setDescription(`Loading your ${res.playlist ? 'playlist' : 'track'}<a:str_music:999330140859404388>`);
        await message.channel.send({ embeds: [acv] });

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    
         
   
         
    },
};

