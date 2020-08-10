const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const fs = require("fs");


const PREFIX = '-';

var version = '1.0.4'

const usedCommandRecently = new Set();

bot.on('ready', () =>{
    console.log('The bot is updated!');
    bot.user.setActivity('Reaper.bot | -help');
});



bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'warn':
        break;
        case 'warnrules':

            if(message.member.permissions.has('ADMINISTRATOR')){
                const Embed = new Discord.MessageEmbed()
            .setTitle("These will result in a warning/verbal")
            .addFields(
                { name: "-You can\'t suggest to warn staff.", value: '\u200B' },
                { name: "-No Advertising, this includes advertising in DMs.", value: '\u200B' },
                { name: "-Your nicknames must be both mention able and appropriate.", value: '\u200B' },
                { name: "-No disrespecting admins, they’re doing their job and they make this server better.", value: '\u200B' },
                { name: "-You can say the n word, just no hard r.", value: '\u200B' },
                { name: "-No XP farming.", value: '\u200B' },
                { name: "-Inappropriate profile pictures.", value: '\u200B' },
                { name: "-Ghost tagging people is not allowed.", value: '\u200B' },
                { name: "-Ear-rape in voice calls is not allowed, and you will be server muted.", value: '\u200B' },
                { name: "-Loud songs/sounds are not to be played in voice calls.", value: '\u200B' },
                { name: "-Tagging <@meyerwertsky#9050> or people with the 'God' role for harassment/no reason.", value: '\u200B' },
                { name: "-Use channels appropriately, stay on topic.", value: '\u200B' },
                { name: "-You can only tag giveaway notifications if the value is over 10 exotics.", value: '\u200B' },
                { name: "-Harassment of individuals is not tolerated nor condoned.", value: '\u200B' },
                { name: "-Faking your clan application answers.", value: '\u200B' },
                { name: "-The pls snipe command from Dank Memer is allowed in the general chat, although do not spam this command. When a staff member asks someone to stop and you continue action will be taken. Other Dank Memer commands are only allowed in #bot-usage.", value: '\u200B' },
                )
             .setColor(0x17202A)
             .setThumbnail('https://cdn.discordapp.com/attachments/482542748210036738/742068412687187968/unknown.png');
             message.channel.send(Embed);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'banrules':
            if(message.member.permissions.has('ADMINISTRATOR')){
                const Embed = new Discord.MessageEmbed()
            .setTitle("These will result in bans")
            .addFields(
                { name: "-Participating/Discussing raids to servers.", value: '\u200B' },
                { name: "-Hacking, DDoSing even threats.", value: '\u200B' },
                { name: "-targeting someone for ethnicity or a condition.", value: '\u200B' },
                { name: "-Pornography.", value: '\u200B' },
                { name: "-Mass DM advertising with 'mass' being 3 or more people.", value: '\u200B' },
                { name: "-If meyer doesn't like you he will just ban you.", value: '\u200B' },
                )
             .setColor(0xBA2308)
             message.channel.send(Embed);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'ranks':
            if(message.member.permissions.has('ADMINISTRATOR')){
                const Embed = new Discord.MessageEmbed()
            .setTitle("The Black Hand rank list")
            .addField("Pitdog", "You are automatically given this role.")
            .addField("Bandit", "This is for you noobs to feel special, you must be prestige 1 in assassin to acquire.")
            .addField("Murderer", "You must be prestige 10 for this role.")
            .addField("Slayer", "Once you are prestige 20 you get this which is usually your first big milestone good job!")
            .addField("Eliminator", "This is the first big jump as u have to go from prestige 20 all the way up to 40 to get this role.")
            .addField("Assassin", "By this point your probably excited to get prestige 100 as u need to be prestige 60 for this role.")
            .addField("Executioner", "You need prestige 100 for this role good job you pro.")
            .addField("Skull Crushers", "You must have prestige 200 for this role. 0.0")
            .addField("Overlord", "Prestige 300 is needed for this role.")
            .addField("Head Hunter", "Prestige 400!!?!")
            .addField("Guardian", "You must be prestige 500 for this role dam son.")
            .addField("Notification roles", "React with an emoji in #choose-your-role to get this type of roles.")
            .addField("Youtuber", "For this role you must upload Assassin! content, have 200 subscribers and promote The Black Hand in your videos, a staff member will post your videos in #youtube-notifications. Only one of your vidoes can be posted per day.")
            .addField("Giveaways", "DM a staff member if you want this role, you must actively host giveaways in the giveaways channel.")
            .addField("DJ", "Staff chooses who gets this role and who does not.")
            .addField("Main_Clan", "This role is given to people that are in The Black Hand’s Assassin clan.")
            .addField("Clan MVP", "The person that gets the most clan points in the week gets this role.")
            .addField("Colored roles", "You can get a colored role if you boost this server.")
            .addField("Nitro Booster", "This role is automatically given to the people that boost the server.")
            .addField("Staff", "This role is for to the people with the Trial Mod, Silencer, The Hand and Speaker role.")
            .addField("Trial Mod", "You get this role if your application was accepted or if you seem like a good moderator, if you do good you get promoted to Silencer and if you do bad you get demoted.")
            .addField("Silencer", "These are the normal Admins good job if you have this role or obtain it.")
            .addField("The Hand", "These are the highest admins there will only ever be 5 at a time hehe its like 5 fingers on a hand woah.")
            .addField("Speaker", "This role is for the co-owner.")
            .addField("Listener", "This role is for the owner.")
             .setColor(0xBA2308)
             message.channel.send(Embed);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'staffrules':
            if(message.member.permissions.has('ADMINISTRATOR')){
                const Embed = new Discord.MessageEmbed()
            .setTitle("These are rules for the admins punishable by demote/kick")
            .addFields(
                { name: "-Kicking/banning for no reason.", value: '\u200B' },
                { name: "-Biased actions.", value: '\u200B' },
                { name: "-Abusing power.", value: '\u200B' },
                { name: "-They can't delete or send messages in #logs, they still can delete messages in other channels.", value: '\u200B' },
                { name: "-They can't talk in #staff-announcements, they still can read unless they're The Hand.", value: '\u200B' },
                { name: "-They can't delete/create channels (without permission).", value: '\u200B' },
                { name: "-They can’t tag everyone (without permission).", value: '\u200B' },
                )
             .setColor(0x17CFEC)
             message.channel.send(Embed);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }

        break;
        case 'changelog':
            if(message.member.permissions.has('SEND_MESSAGE')){
                const Embed = new Discord.MessageEmbed()
            .setTitle("Changelog version " + version)
            .addFields(
                { name: "-Working on a -warn command will be released this version.", value: '\u200B' },
                { name: "-Added a -ranks command", value: '\u200B' },
                { name: "-Updated -help command", value: '\u200B' },
                { name: "-Updated -warnrules command", value: '\u200B' },
                { name: "-Connected the bot with mulitple devices.", value: '\u200B' },
                { name: "-Connected the bot with a server to let it be online 24/7.", value: '\u200B' },
                { name: "-Fixed -ban command kicking people instead of banning.", value: '\u200B' },
            )
            .setColor(0x17CFEC)
             message.channel.send(Embed);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }

        break;
        case 'invitelink':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else {
                message.channel.send('**Permanent Discord Invite:** https://discord.gg/uFbsPud')
                usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
            }
        break;
        case 'youtube':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else {
                message.channel.send('https://www.youtube.com/channel/UCx-6TuphiTiNrFBsiRNrfGw')
                usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
            }
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version' + version);
            }else{
                message.channel.send('Invalid Args')
            }
        break;
        case 'help':
            const Embed = new Discord.MessageEmbed()
            .setTitle("List of all commands")
            .addField("-youtube", 'Gives meyers youtube link.')
            .addField("-clear", "Deletes a specific amount of messages.")
            .addField("-ban", "Ban a specific person from the discord server.")
            .addField("-kick", "Kick a specific person from the discord server.")
            .addField("-info version", "Shows the current version from the bot.")
            .addField("-mute", "Mute a specific person for a specific amount of time.")
            .addField("-invitelink", "Gives the permanent black hand invite link.")
            .addField("-staffrules", "Send the staff rules embed.")
            .addField("-warnrules", "Send the warn rules embed.")
            .addField("-banrules", "Sends the ban rules embed.")
            .addField("-changelog", "Shows what's changed in the last version from the bot.")
            .addField("-ranks", "Shows The Black Hand ranks embed.")
             .setColor(0x6FC618)
             message.channel.send(Embed);
        break;
        case 'mute':
            if(message.member.permissions.has('MANAGE_MESSAGE')){
                var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
                if(!person) return  message.reply("I am unable to find this user " + person)
     
                let role = message.guild.roles.cache.find(role => role.name === "Muted");
               
     
                if(!role) return message.reply("Couldn't find the mute role.")
     
     
                let time = args[2];
                if(!time){
                    return message.reply("You didnt specify a time!");
                }

                person.roles.add(role.id);
     
     
                message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
     
                setTimeout(function(){
                    
                    person.roles.remove(role.id);
                    console.log(role.id)
                    message.channel.send(`@${person.user.tag} has been unmuted.`)
                }, ms(time));

            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'clear':
            if(message.member.permissions.has('MANAGE_MESSAGE')){
          if(!args[1]) return message.reply('Error, you did not put in an amount.')
          message.channel.bulkDelete(args[1]);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'kick':
            if(message.member.permissions.has('KICK_MEMBERS')){
                if(!args[1]) return message.reply('You need to specify a person!')
                
                const user = message.mentions.users.first();

                if(user){
                    const member = message.guild.member(user);

                    if(member){
                        member.kick({ression: 'You were kicked from the black hand!'}).then(() =>{
                            message.reply(`Sucessfully kicked ${user.tag} from the server!`)
                        }).catch(err =>{
                            message.reply(`I was unable to kick this member`);
                        });        
                    } else {
                        message.reply("This user isn\'t in the discord server!")
                    }
                } else {
                    message.reply("That user isn\'t in the server!")
                }
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'ban':
            if(usedCommandRecently.has(message.author.id)){
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else{
                if(message.member.permissions.has('BAN_MEMBERS')) {
                    if(!args[1]) return message.reply('You need to specify a person!')
                    
                    const user = message.mentions.users.first();
    
                    if(user){
                        const member = message.guild.member(user);
    
                        if(member){
                            member.ban({ression: 'You were banned from the black hand!'}).then(() =>{
                                message.reply(`Sucessfully banned ${user.tag} from the server!`)
                            }).catch(err =>{
                                message.reply(`I was unable to ban this member`);
                            });        
                        } else {
                            message.reply("This user isn\'t in the discord server!")
                        }
                    } else {
                        message.reply("That user isn\'t in the server!")
                    }
                }else {
                    message.channel.send("You don\'t have permissions to use this command!")
                    usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
            }}
        break;
    }
})

bot.login(process.env.token);