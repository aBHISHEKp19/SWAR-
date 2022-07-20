module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `No music currently playing... try again ?<a:No_1:999332118368891010>`, ephemeral: true, components: [] });

            int.member.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `I have sent you the title of the music in dm ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Unable to send you a private message your dms are off`, ephemeral: true, components: [] });
            });
        }
    }
};