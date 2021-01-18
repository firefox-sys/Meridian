module.exports = {
    name: "pat",
    usage: "< id / mention >",
    run: async function (client, message, args) {

        if(message.deletable) message.delete();

        let patUser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!patUser) return message.reply("user not found.");
        if (message.mentions.members.first().user === message.author) return message.reply("you can't roleplay with yourself!");

        let array = ["gives headpats to", "pats", "pets the fluffy head of", "happily pets"];

        await message.channel.send(`${message.author} ${array[Math.round(Math.random() * (array.length - 1))]} ${patUser}!`);
    }

};
