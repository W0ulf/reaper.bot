const Discord = require('discord.js');
const ms = require('ms');
const PREFIX = '-';
const bot = new Discord.Client();
const fs = require("fs");
const Dice = () => Math.floor(Math.random() * 6) + 1;

var version = '1.0.7'

const usedCommandRecently = new Set();

bot.on('ready', () =>{
    console.log('The bot is updated!');
    bot.user.setActivity('Reaper.bot | -help');
});


    bot.on('message', async message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'pro':
            const Embed2 = new Discord.MessageEmbed()
            .setTitle("Yes yes, here is the proof Wout is pro. :)")
                .addField("Geometry dash sub zero lvl 4", "https://www.youtube.com/watch?v=fNTNG3GsDEI&ab_channel=wout")
                .addField("Geometry dash light lvl 6", "https://www.youtube.com/watch?v=4BTjxQ4wJ8c&ab_channel=wout")
                .addField("Geometry dash meltdown lvl 2", "https://www.youtube.com/watch?v=9F8oInoxUyE&ab_channel=wout")
             .setColor(0x17CFEC)
             message.channel.send(Embed2);
        break;
        case 'log':
            if(message.member.permissions.has('ADMINISTRATOR')){
                console.log(message.guild.roles);
                message.channel.bulkDelete
                message.channel.send("Succesfully logged all rolls (dev only).")
            } else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'rolldice':
            message.reply(' you rolled a ' + Dice());
        break;
        case 'valuelists':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else {
                const Embed3 = new Discord.MessageEmbed()
            .setTitle("**Valuelists**")
            .addField("Assassin valuelist:", "http://bit.ly/AssassinValues")
            .addField("MM2 valuelist:", "https://mm2values.com/v3/?p=home, https://sites.google.com/view/valuelist")
            .addField("Counter blox demandlist:", "https://docs.google.com/document/d/12zxcA5V20GayIkSfZh4XmlECcOkcHUamXfrLbdMxnmw/edit")
            .addField("BGS valuelist:", "https://docs.google.com/spreadsheets/d/1kFwDUAXFN6gpBPk1wdfv1YuDD-7Z0vRuijVJZE_bLaY/htmlview?pru=AAABcmgeoxk*MAjg05J9AA2G_oL3IvMuqg#gid=0")
            .addField("Adopt me valuelist:", "https://www.adoptmevaluelist.com/")
             .setColor(0xBA2308)
             message.channel.send(Embed3);
                usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
            }
        break;
        case 'valuelist':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else {
                const Embed4 = new Discord.MessageEmbed()
            .setTitle("**Valuelists**")
            .addField("Assassin valuelist:", "http://bit.ly/AssassinValues")
            .addField("MM2 valuelist:", "https://mm2values.com/v3/?p=home, https://sites.google.com/view/valuelist")
            .addField("Counter blox demandlist:", "https://docs.google.com/document/d/12zxcA5V20GayIkSfZh4XmlECcOkcHUamXfrLbdMxnmw/edit")
            .addField("BGS valuelist:", "https://docs.google.com/spreadsheets/d/1kFwDUAXFN6gpBPk1wdfv1YuDD-7Z0vRuijVJZE_bLaY/htmlview?pru=AAABcmgeoxk*MAjg05J9AA2G_oL3IvMuqg#gid=0")
            .addField("Adopt me valuelist:", "https://www.adoptmevaluelist.com/")
             .setColor(0xBA2308)
             message.channel.send(Embed4);
                usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
            }
        break;
        case 'value':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else {
                if(args[1] === 'list'){
                    const Embed5 = new Discord.MessageEmbed()
            .setTitle("**Valuelists**")
            .addField("Assassin valuelist:", "http://bit.ly/AssassinValues")
            .addField("MM2 valuelist:", "https://mm2values.com/v3/?p=home, https://sites.google.com/view/valuelist")
            .addField("Counter blox demandlist:", "https://docs.google.com/document/d/12zxcA5V20GayIkSfZh4XmlECcOkcHUamXfrLbdMxnmw/edit")
            .addField("BGS valuelist:", "https://docs.google.com/spreadsheets/d/1kFwDUAXFN6gpBPk1wdfv1YuDD-7Z0vRuijVJZE_bLaY/htmlview?pru=AAABcmgeoxk*MAjg05J9AA2G_oL3IvMuqg#gid=0")
            .addField("Adopt me valuelist:", "https://www.adoptmevaluelist.com/")
             .setColor(0xBA2308)
             message.channel.send(Embed5);
             usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
                } else {
                    message.channel.send('**Invalid args!**');
                }
            }
        break;
        case 'poll':
            if(message.member.permissions.has('ADMINISTRATOR')){
                if(args[1]){
                message.channel.bulkDelete(1);
                let msgArgs = args.slice(1).join(" ");
                message.channel.send("**" + msgArgs + "**").then(messageReaction => {
                    messageReaction.react("👍");
                    messageReaction.react("👎");
                    message.catch(console.error);
                })};
                if(!args[1]){
                    const Embed6 = new Discord.MessageEmbed()
                    .setTitle("Inititate Poll")
                    .setColor(0xFFC300)
                    .setDescription("-poll to initiate a yes or no poll")
                    message.channel.send(Embed6);
                };
            }
        break;
        case 'warnrules':
            if(message.member.permissions.has('ADMINISTRATOR')){
                message.channel.bulkDelete(1);
                const Embed7 = new Discord.MessageEmbed()
            .setTitle("These will result in a warning/verbal")
            .addFields(
                { name: "-You can\'t suggest to warn staff.", value: '\u200B' },
                { name: "-No Advertising, this includes advertising in DMs.", value: '\u200B' },
                { name: "-Your nicknames must be both mention able and appropriate.", value: '\u200B' },
                { name: "-No disrespecting admins, they’re doing their job and they make this server better.", value: '\u200B' },
                { name: "-No XP farming.", value: '\u200B' },
                { name: "-Any discriminations towards color or sexual preference will be punished!", value: '\u200B' },
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
             message.channel.send(Embed7);
            } else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'banrules':
            if(message.member.permissions.has('ADMINISTRATOR')){
                message.channel.bulkDelete(1);
                const Embed8 = new Discord.MessageEmbed()
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
             message.channel.send(Embed8);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'ranks':
            if(message.member.permissions.has('ADMINISTRATOR')){
                 message.channel.bulkDelete(1);
                const Embed9 = new Discord.MessageEmbed()
            .setTitle("The Black Hand rank list!")
            .addField("Pitdog", "You are automatically given this role.")
            .addField("Luxury", "This role is for people who managed to buy all the black hand merch. This also comes with the same perms as the Legendary role.")
            .addField("Noobie (10)", "This role is obtained by reaching lvl 10 with mee6.")
            .addField("cool person (20)", "This role is obtained by reaching lvl 20 with mee6 this comes with image perms and nickname perms.")
            .addField("Epic (40)", "This role is obtained by reaching lvl 40 with mee6 this comes with access to the colored roles.")
            .addField("Legendary (60)", "This role is obtained by reaching lvl 60 with mee6 this comes with access to the colored roles.")
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
            .addField("Silencer", "This is a role for the honored people in the black hand.")
            .addField("Trial Mod", "You get this role if your application was accepted or if you seem like a good moderator, if you do good you get promoted to The Hand and if you do bad you get demoted.")
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
                message.channel.bulkDelete(1);
                const Embed9 = new Discord.MessageEmbed()
            .setTitle("These are rules for the admins punishable by demote/kick")
            .addFields(
                { name: "-Kicking/banning for no reason.", value: '\u200B' },
                { name: "-Biased actions.", value: '\u200B' },
                { name: "-Abusing power.", value: '\u200B' },
                { name: "-They can't delete or send messages in #logs, they still can delete messages in other channels.", value: '\u200B' },
                { name: "-They can't talk in #staff-announcements, they still can read unless they're The Hand.", value: '\u200B' },
                { name: "-They can't delete/create channels (without permission).", value: '\u200B' },
                { name: "-They can’t tag everyone (without permission).", value: '\u200B' },
                { name: "-They have to send atleast 100 messages per week.", value: '\u200B' },
                )
             .setColor(0x17CFEC)
             message.channel.send(Embed);
            } else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'changelog':
            if(message.member.permissions.has('SEND_MESSAGE')){
                const Embed10 = new Discord.MessageEmbed()
            .setTitle("Changelog version " + version)
            .addFields(
                { name: "-Added a -log command.", value: '\u200B' },
                { name: "-Added a -addrole command.", value: '\u200B' },
                { name: "-Added a -removerole command.", value: '\u200B' },
                { name: "-Added a -pro command.", value: '\u200B' },
            )
            .setColor(0x17CFEC)
             message.channel.send(Embed10);
            }else {
                message.channel.send("You don\'t have permissions to use this command!")
            }

        break;
        case 'invitelink':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! Wait another 20 secs!");
            } else {
                message.channel.send('**Permanent Discord Invite:** https://discord.gg/sWXTF4R')
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
            const Embed11 = new Discord.MessageEmbed()
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
            .addField("-poll", "Makes from your question a poll.")
            .addField("-valuelist", "Shows a couple roblox game valeu lists.")
            .addField("-rolldice", "Gives you a random numbre between 1 and 6.")
            .addField("-addrole {role} {user}", "Gives a specific role to a specific user.")
            .addField("-removerole {role} {user}", "Removes a specific role to a specific user.")
            .addField("-log", "Gives the role info for the server in the dev logs.")
            .addField("-pro", "Shows soem cool vids ;).")
             .setColor(0x6FC618)
             message.channel.send(Embed11);
        break;
        case 'mute':
            if(message.member.permissions.has('MANAGE_MESSAGES')){
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
            } else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'addrole':
            if(message.member.permissions.has('MANAGE_ROLES')){
                if(args[1] === 'middleman-trainee'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Middleman_Trainee");
               
                    if(!role) return message.reply("Couldn't find the middleman-trainee role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Midlleman-Trainee role!`)
                } else {
                if(args[1] === 'middleman'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Middleman");
               
                    if(!role) return message.reply("Couldn't find the middleman role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Middleman role!`)
                } else {
                if(args[1] === 'bot'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Bot");
               
                    if(!role) return message.reply("Couldn't find the bot role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Bot role!`)
                } else {
                if(args[1] === 'merch'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Merch_Notifications");
               
                    if(!role) return message.reply("Couldn't find the merch role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Merch_Notifications role!`)
                } else {
                if(args[1] === 'game'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Game_Nights");
               
                    if(!role) return message.reply("Couldn't find the game role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Game_Nights role!`)
                } else {
                if(args[1] === 'i'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "I_Want_Free_Stuff");
               
                    if(!role) return message.reply("Couldn't find the i role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the I_Want_Free_Stuff role!`)
                } else {
                if(args[1] === 'youtuber'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Youtuber");
               
                    if(!role) return message.reply("Couldn't find the youtuber role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Youtuber role!`)
                } else {
                if(args[1] === 'giveaways'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Giveaways");
               
                    if(!role) return message.reply("Couldn't find the giveaways role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Giveaways role!`)
                } else {
                if(args[1] === 'dj'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "DJ");
               
                    if(!role) return message.reply("Couldn't find the dj role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the DJ role!`)
                } else {
                if(args[1] === 'main'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Main_Clan");
               
                    if(!role) return message.reply("Couldn't find the main role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Main_Clan role!`)
                } else {
                if(args[1] === 'pit'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Pit_Dog");
               
                    if(!role) return message.reply("Couldn't find the pit role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Pit_Dog role!`)
                } else {
                if(args[1] === 'executioner'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Executioner");
               
                    if(!role) return message.reply("Couldn't find the executioner role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Executioner role!`)
                } else {
                if(args[1] === 'skull'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Skull Crusher");
               
                    if(!role) return message.reply("Couldn't find the skull role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Skull Crusher role!`)
                } else {
                if(args[1] === 'overlord'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Overlord");
               
                    if(!role) return message.reply("Couldn't find the overlord role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Overlord role!`)
                } else {
                if(args[1] === 'headr'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Head Hunter");
               
                    if(!role) return message.reply("Couldn't find the head role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Head Hunter role!`)
                } else {
                if(args[1] === 'blacklisted'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Blacklisted");
               
                    if(!role) return message.reply("Couldn't find the blacklisted role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Blacklisted role!`)
                } else {
                if(args[1] === 'guardian'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Guardian");
               
                    if(!role) return message.reply("Couldn't find the guardian role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Guardian role!`)
                } else {
                if(args[1] === 'og'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "OG");
               
                    if(!role) return message.reply("Couldn't find the og role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the OG role!`)
                } else {
                if(args[1] === 'noobie'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Noobie (10)");
               
                    if(!role) return message.reply("Couldn't find the noobie role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Noobie (10) role!`)
                } else {
                if(args[1] === 'cool'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Cool Person (20)");
               
                    if(!role) return message.reply("Couldn't find the cool role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Cool Person (20) role!`)
                } else {
                if(args[1] === 'wispy'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Wispy");
               
                    if(!role) return message.reply("Couldn't find the wispy role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Wispy role!`)
                } else {
                if(args[1] === 'midnight'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Midnight");
               
                    if(!role) return message.reply("Couldn't find the midnight role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Midnight role!`)
                } else {
                if(args[1] === 'epic'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Epic (40)");
               
                    if(!role) return message.reply("Couldn't find the epic role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Epic (40) role!`)
                } else {
                if(args[1] === 'legendary'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Legendary (40)");
               
                    if(!role) return message.reply("Couldn't find the legendary role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Legendary (40) role!`)
                } else {
                if(args[1] === 'luxury'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Luxury");
               
                    if(!role) return message.reply("Couldn't find the luxury role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Luxury role!`)
                } else {
                if(args[1] === 'merch_designers'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Merch_Designers");
               
                    if(!role) return message.reply("Couldn't find the lerch_designers role.")
     
                    person.roles.add('588215322272858144');
                    message.channel.send(`@${person.user.tag} has now been giving the Merch_Designers role!`)
                } else {
                if(args[1] === 'pink'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Pink");
               
                    if(!role) return message.reply("Couldn't find the pink role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the pink role!`)
                } else {
                if(args[1] === 'cyan'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Cyan");
               
                    if(!role) return message.reply("Couldn't find the cyan role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the cyan role!`)
                } else {
                if(args[1] === 'yellow'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Yellow");
               
                    if(!role) return message.reply("Couldn't find the yellow role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the yellow role!`)
                } else {
                if(args[1] === 'orange'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Orange");
               
                    if(!role) return message.reply("Couldn't find the orange role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the orange role!`)
                } else {
                if(args[1] === 'purple'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Purple");
               
                    if(!role) return message.reply("Couldn't find the purple role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the purple role!`)
                } else {
                if(args[1] === 'blurple'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Blurple");
               
                    if(!role) return message.reply("Couldn't find the blurple role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the blurple role!`)
                } else {
                if(args[1] === 'blue'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Blue");
               
                    if(!role) return message.reply("Couldn't find the blue role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the blue role!`)
                } else {
                if(args[1] === 'white'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "White");
               
                    if(!role) return message.reply("Couldn't find the White role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the White role!`)
                } else {
                if(args[1] === 'black'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Black");
               
                    if(!role) return message.reply("Couldn't find the Black role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Black role!`)
                } else { 
                if(args[1] === 'muted'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Muted");
               
                    if(!role) return message.reply("Couldn't find the Muted role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Muted role!`)
                } else { 
                if(args[1] === 'staff'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Staff");
               
                    if(!role) return message.reply("Couldn't find the Staff role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Staff role!`)
                } else { 
                if(args[1] === 'silencer'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Silencer");
               
                    if(!role) return message.reply("Couldn't find the Silencer role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Silencer role!`)
                } else { 
                if(args[1] === 'trial'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Trial Mod");
               
                    if(!role) return message.reply("Couldn't find the Trial Mod role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Trial Mod role!`)
                } else { 
                if(args[1] === 'bots'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Bots");
               
                    if(!role) return message.reply("Couldn't find the Bots role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the Bots role!`)
                } else { 
                if(args[1] === 'green'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Green");
               
                    if(!role) return message.reply("Couldn't find the green role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the green role!`)
                } else { 
                if(args[1] === 'red'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Red");
               
                    if(!role) return message.reply("Couldn't find the red role.")
     
                    person.roles.add(role.id);
                    message.channel.send(`@${person.user.tag} has now been giving the red role!`)
            }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} else {
                message.channel.send("You don\'t have permissions to use this command!")
            }
        break;
        case 'removerole':
            if(message.member.permissions.has('MANAGE_ROLES')){
                if(args[1] === 'middleman-trainee'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Middleman_Trainee");
               
                    if(!role) return message.reply("Couldn't find the middleman-trainee role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Midlleman-Trainee role!`)
                } else {
                if(args[1] === 'middleman'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Middleman");
               
                    if(!role) return message.reply("Couldn't find the middleman role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Middleman role!`)
                } else {
                if(args[1] === 'bot'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Bot");
               
                    if(!role) return message.reply("Couldn't find the bot role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Bot role!`)
                } else {
                if(args[1] === 'merch'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Merch_Notifications");
               
                    if(!role) return message.reply("Couldn't find the merch role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Merch_Notifications role!`)
                } else {
                if(args[1] === 'game'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Game_Nights");
               
                    if(!role) return message.reply("Couldn't find the game role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Game_Nights role!`)
                } else {
                if(args[1] === 'i'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "I_Want_Free_Stuff");
               
                    if(!role) return message.reply("Couldn't find the i role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the I_Want_Free_Stuff role!`)
                } else {
                if(args[1] === 'youtuber'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Youtuber");
               
                    if(!role) return message.reply("Couldn't find the youtuber role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Youtuber role!`)
                } else {
                if(args[1] === 'giveaways'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Giveaways");
               
                    if(!role) return message.reply("Couldn't find the giveaways role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Giveaways role!`)
                } else {
                if(args[1] === 'dj'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "DJ");
               
                    if(!role) return message.reply("Couldn't find the dj role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the DJ role!`)
                } else {
                if(args[1] === 'main'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Main_Clan");
               
                    if(!role) return message.reply("Couldn't find the main role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Main_Clan role!`)
                } else {
                if(args[1] === 'pit'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Pit_Dog");
               
                    if(!role) return message.reply("Couldn't find the pit role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Pit_Dog role!`)
                } else {
                if(args[1] === 'executioner'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Executioner");
               
                    if(!role) return message.reply("Couldn't find the executioner role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Executioner role!`)
                } else {
                if(args[1] === 'skull'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Skull Crusher");
               
                    if(!role) return message.reply("Couldn't find the skull role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Skull Crusher role!`)
                } else {
                if(args[1] === 'overlord'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Overlord");
               
                    if(!role) return message.reply("Couldn't find the overlord role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Overlord role!`)
                } else {
                if(args[1] === 'head'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Head Hunter");
               
                    if(!role) return message.reply("Couldn't find the head role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Head Hunter role!`)
                } else {
                if(args[1] === 'blacklisted'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Blacklisted");
               
                    if(!role) return message.reply("Couldn't find the blacklisted role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Blacklisted role!`)
                } else {
                if(args[1] === 'guardian'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Guardian");
               
                    if(!role) return message.reply("Couldn't find the guardian role.")
     
                    person.roles.removed(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Guardian role!`)
                } else {
                if(args[1] === 'og'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "OG");
               
                    if(!role) return message.reply("Couldn't find the og role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the OG role!`)
                } else {
                if(args[1] === 'noobie'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Noobie (10)");
               
                    if(!role) return message.reply("Couldn't find the noobie role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Noobie (10) role!`)
                } else {
                if(args[1] === 'cool'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Cool Person (20)");
               
                    if(!role) return message.reply("Couldn't find the cool role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Cool Person (20) role!`)
                } else {
                if(args[1] === 'wispy'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Wispy");
               
                    if(!role) return message.reply("Couldn't find the wispy role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Wispy role!`)
                } else {
                if(args[1] === 'midnight'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Midnight");
               
                    if(!role) return message.reply("Couldn't find the midnight role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Midnight role!`)
                } else {
                if(args[1] === 'epic'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Epic (40)");
               
                    if(!role) return message.reply("Couldn't find the epic role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Epic (40) role!`)
                } else {
                if(args[1] === 'legendary'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Legendary (40)");
               
                    if(!role) return message.reply("Couldn't find the legendary role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Legendary (40) role!`)
                } else {
                if(args[1] === 'luxury'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Luxury");
               
                    if(!role) return message.reply("Couldn't find the luxury role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Luxury role!`)
                } else {
                if(args[1] === 'merch_designers'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Merch_Designers");
               
                    if(!role) return message.reply("Couldn't find the lerch_designers role.")
     
                    person.roles.remove('588215322272858144');
                    message.channel.send(`@${person.user.tag} has now been removed from the Merch_Designers role!`)
                } else {
                if(args[1] === 'pink'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Pink");
               
                    if(!role) return message.reply("Couldn't find the pink role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the pink role!`)
                } else {
                if(args[1] === 'cyan'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Cyan");
               
                    if(!role) return message.reply("Couldn't find the cyan role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the cyan role!`)
                } else {
                if(args[1] === 'yellow'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Yellow");
               
                    if(!role) return message.reply("Couldn't find the yellow role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the yellow role!`)
                } else {
                if(args[1] === 'orange'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Orange");
               
                    if(!role) return message.reply("Couldn't find the orange role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the orange role!`)
                } else {
                if(args[1] === 'purple'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Purple");
               
                    if(!role) return message.reply("Couldn't find the purple role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the purple role!`)
                } else {
                if(args[1] === 'blurple'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Blurple");
               
                    if(!role) return message.reply("Couldn't find the blurple role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the blurple role!`)
                } else {
                if(args[1] === 'blue'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Blue");
               
                    if(!role) return message.reply("Couldn't find the blue role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the blue role!`)
                } else {
                if(args[1] === 'white'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "White");
               
                    if(!role) return message.reply("Couldn't find the White role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the White role!`)
                } else {
                if(args[1] === 'black'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Black");
               
                    if(!role) return message.reply("Couldn't find the Black role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Black role!`)
                } else { 
                if(args[1] === 'muted'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Muted");
               
                    if(!role) return message.reply("Couldn't find the Muted role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Muted role!`)
                } else { 
                if(args[1] === 'staff'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Staff");
               
                    if(!role) return message.reply("Couldn't find the Staff role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Staff role!`)
                } else { 
                if(args[1] === 'silencer'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Silencer");
               
                    if(!role) return message.reply("Couldn't find the Silencer role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Silencer role!`)
                } else { 
                if(args[1] === 'trial'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Trial Mod");
               
                    if(!role) return message.reply("Couldn't find the Trial Mod role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Trial Mod role!`)
                } else { 
                if(args[1] === 'bots'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Bots");
               
                    if(!role) return message.reply("Couldn't find the Bots role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the Bots role!`)
                } else { 
                if(args[1] === 'green'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Green");
               
                    if(!role) return message.reply("Couldn't find the green role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the green role!`)
                } else { 
                if(args[1] === 'red'){
                    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[2]));
                    if(!person) return  message.reply("I am unable to find this user " + person)
     
                    let role = message.guild.roles.cache.find(role => role.name === "Red");
               
                    if(!role) return message.reply("Couldn't find the red role.")
     
                    person.roles.remove(role.id);
                    message.channel.send(`@${person.user.tag} has now been removed from the red role!`)
            }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} else {
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
            } else {
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
                } else {
                    message.channel.send("You don\'t have permissions to use this command!")
                    usedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 20000);
            }}
        break;
    }});   


bot.login(process.env.token);