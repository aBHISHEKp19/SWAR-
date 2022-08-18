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
/*
        player.on('trackStart', (queue, track, message) => {
    
            // const track = queue.current;
             
             //const queue = player.getQueue(message.guild.id);
             const timestamp = queue.getPlayerTimestamp();
             const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;
             const tyt = new MessageEmbed()
         .setColor('RANDOM')
         .setDescription(`**NOW PLAYING IN ${queue.connection.channel.name}** <a:kopkop:988045866373877880>`)
         .addField('**Gaana**', `${track.title}`, true)
         .addField('**Requester**',`${message.member}`, true)
         .addField('Duration', `${trackDuration}`, true)
         .setTimestamp()
         .setFooter("Made by appy")
         .setThumbnail('https://i.pinimg.com/originals/71/21/29/712129d48c17029cfd2bd99bf6a4ee10.gif')
         //.setImage('https://images-ext-2.discordapp.net/external/RbdDCPRH2nNGoJn014CMst8t-p2Pt0vV5Uwr8PYCzHw/https/images-ext-1.discordapp.net/external/4-vz8hiB9HzaMKqpi2oUD0Cx0snxoYMHKvhmxyeTIIY/https/media.discordapp.net/attachments/932610217567473715/946403019489181786/lol.gif');
         
             if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
             queue.metadata.send({ embeds: [tyt] });
             //message.channel.send({ embeds: [tyt] });
         
         });*/
         
    },
};