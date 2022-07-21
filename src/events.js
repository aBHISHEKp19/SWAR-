
const { MessageEmbed } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track, message) => {
    
   // const track = queue.current;
    
    //const queue = player.getQueue(message.guild.id);
    const timestamp = queue.getPlayerTimestamp();
    const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;
    const tyt = new MessageEmbed()
.setColor('RANDOM')
.setDescription(`**NOW PLAYING IN ${queue.connection.channel.name}** <a:kopkop:988045866373877880>`)
.addField('**Gaana**', `${track.title}`, true)
//.addField('**Requester**',`${message.author.tag}`, true)
.addField('Duration', `${trackDuration}`, true)
.setTimestamp()
.setFooter("Made by appy")
.setThumbnail('https://i.pinimg.com/originals/71/21/29/712129d48c17029cfd2bd99bf6a4ee10.gif')
//.setImage('https://images-ext-2.discordapp.net/external/RbdDCPRH2nNGoJn014CMst8t-p2Pt0vV5Uwr8PYCzHw/https/images-ext-1.discordapp.net/external/4-vz8hiB9HzaMKqpi2oUD0Cx0snxoYMHKvhmxyeTIIY/https/media.discordapp.net/attachments/932610217567473715/946403019489181786/lol.gif');

    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send({ embeds: [tyt] });
    //message.channel.send({ embeds: [tyt] });

});

player.on('trackAdd', (queue, track) => {
    const sdgs = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Track **${track.title}** added in queue <a:swartik:988048652901699584>`);
    queue.metadata.send({ embeds: [sdgs] });
});

player.on('botDisconnect', (queue) => {
    const grgr = new MessageEmbed()
    .setColor('#da004e')
    .setDescription('Someone disconnected me from voice channel, clearing queue... ❌');
    queue.metadata.send({ embeds: [grgr] });
});

player.on('channelEmpty', (queue) => {
    const ggsx = new MessageEmbed()
    .setColor('#da004e')
    .setDescription('Nobody is in the voice channel, mai chala');
    queue.metadata.send({ embeds: [ggsx] });
});

player.on('queueEnd', (queue) => {
    const rgs = new MessageEmbed()
    .setColor('#da004e')
    .setDescription('I finished playing the whole queue <a:swartik:988048652901699584>');
    queue.metadata.send({ embeds: [rgs] });
});