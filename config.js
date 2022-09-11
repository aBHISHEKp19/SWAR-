module.exports = {
    app: {
        px: '>>',
        token: 'OTcyMTY2NTkxNDczMTU2MDk2.GrtUiM.WmGUXBUfUKl1RftV50CRahW1H0ek1wOFVJ_Oug',
       
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
