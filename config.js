module.exports = {
    app: {
        px: '>>',
        token: '',
       
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                filter: "audioonly",
                opusEncoded: "true",
                quality: 'highestaudio',
                highWaterMark: 1 << 30,
            }
        }
    }
};
