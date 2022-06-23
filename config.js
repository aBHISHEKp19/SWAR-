module.exports = {
    app: {
        px: '>>',
        token: 'OTcyMTY2NTkxNDczMTU2MDk2.G5mTlp.WOrtVCqaAPs6a3QKHaooUIISp_Lv_bGZDno44s',
       
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
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
