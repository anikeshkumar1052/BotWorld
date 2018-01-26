
const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON){
        let embed = new Discord.RichEmbed()
        .setColor('#50BB7C')
        .addField('Profile', 'https://discordbots.org/bot/404762043527462922')
        .setFooter('DiscordEconomy#1500 ' + new Date().toISOString(), bot.user.avatarURL);
        return message.channel.send(embed);
}

module.exports.help = {
    names: ['botprofile', 'bp']
}