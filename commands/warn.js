const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))
module.exports = {
    name: 'warn',
    description: "warn a user with this command!",
    execute(message, args){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don\'t have permissions to use this command!");
        if (!args[1]) return message.reply('You did not specify a user.');
        if (!args[2]) return message.reply('You did not give a reasoning.')
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("I don't have perms to warn this person");
        if (!warnUser) return message.reply("Couldn't find that user!");
        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        var reason = args.slice(2).join("");
        if (warnUser.hasPermission("MANAGE_MESSAGE")) return message.reply("You can\'t warn this user!");
        if (!warns[warnUser.id]) warns[warnUser.id] ={
            warns: 0
        };
        warns[warnUser.id].warns++;
        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
            if (err) console.log(err);
        });
        var embed = new Discord.MessageEmbed()
            .setColor("0x17CFEC")
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTitle('**Warned** ${warnUser} (${warnUser.id})')
            .setDescription('**Reason:** ${reason}')
            .addField("Amount of warns", warns[warnUser.id].warns);
        var channel = message.member.guild.channels.chache.get("742420391057948783");
        if(!channel) return;
        channel.send(embed);
    }

}