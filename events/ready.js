module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}`);

   client.user.setActivity(`>>help`, { type: "LISTENING" })
   /* let ActiOptions = ["LISTENING", "WATCHING"];
    setInterval(function () {
        // Randomise
        let randomsieActivity = ActiOptions[Math.floor(Math.random() * ActiOptions.length)];
        // Activity
        client.user.setActivity({
            name: `>>help`,
            name: `${client.guild.name}`,
            type: randomsieActivity,
          
        });
    
    }, 2000);*/
    
};