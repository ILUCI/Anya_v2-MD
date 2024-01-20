module.exports = {
  cmdName: () => ({
    name: ['bot'],
    alias: ['h''],
    category: 'core',
    react: '🤖',
    desc: 'Command list of the bot.'
  }),
  getCommand: async (command, prefix, args, pika, bot, anyaV2, startPing) => {
  const Config = require('../../config');
  const { myfunc, plugin, stylish } = require('../lib');
  const Ping = startPing - performance.now();

  const caption = `
*Hello, ${pika.pushName}*
_I'm ${Config.botname} >> 🖤🥀_

📅 Date Today : ${myfunc.dayToday().date}
⌚ Time Now : ${myfunc.dayToday().time}

《⟡━━━━━⟪ ${stylish.fancy32(Config.ownername)} ⟫━━━━━⟡》
║╭───────────┈⟡
║│✗»𝚄𝚜𝚎𝚛 : ${pika.pushName}
║│✗»𝙱𝚘𝚝 : ${Config.botname}
║│✗»𝙾𝚠𝚗𝚎𝚛 : ${Config.ownername}
║│✗»𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${plugin.pluginSize().size}
║│✗»𝚄𝚜𝚎𝚛𝚜 : ${await myfunc.totalAnyaUsers()}
║│✗»𝚂𝚙𝚎𝚎𝚍 : ${Ping.toFixed(2).replace('-', '')}ms
║╰─────────────┈⟡
⟪⟡───────⟐⌬⟐───────⟡⟫

*💠 Fᴏʟʟᴏᴡ ᴍᴇ ᴏɴ :* https://instagram.com/${Config.instagramId}
*👥 Pᴜʙʟɪᴄ Gʀᴏᴜᴘ :* https://chat.whatsapp.com/L9kqKKZpQY2BrqHabqfa0I

${plugin.makeAllmenu(prefix)}

🎀 _Type ${prefix}listmenu for my command list._

🔖 _Type ${prefix}help <command_name> for plugin information._

${Config.footer}`

  const ownerq = { key: { participant: '0@s.whatsapp.net', ...(pika.chat ? { remoteJid: 'status@broadcast' } : {}), }, message: { contactMessage: { displayName: Config.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${stylish.fancy31(Config.ownername)},;;;\nFN:${stylish.fancy31(Config.ownername)}\nitem1.TEL;waid=${Config.ownernumber}:${Config.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: Config.image_3, thumbnail: Config.image_3, sendEphemeral: true, }, }, };

  if (args[0] && (command === 'help')) {
  plugin.getPluginInfo(args[0])
   .then((res) => {
     if (!res) return pika.reply('This command\'s information doesn\'t exists 😮‍💨, please check the command name again.');
     pika.reply(`_Hey, is this the information about this plugin you're looking for 😙 ?_\n\n💠 Name : ${res.name}${res.alias ? '\n🍜 Alias : ' + res.alias : ''}${res.react ? '\n🌟 React : ' + res.react : ''}${res.need ? '\n📃 Need : ' + res.need : ''}\n💭 Category : ${res.category}\n🎀 Description : ${res.desc}`);
      }).catch((error) => {
      console.log(error)
      pika.reply('Oopsie! an error!');
      });
  } else {
  await anyaV2.sendMessage(pika.chat, {
      image: Config.image_1,
      caption: caption,
      contextInfo: {
        externalAdReply: {
          title: Config.botname,
          body: 'Here\'s the full list of my commands darling',
          thumbnail: Config.image_2,
          showAdAttribution: true
          }
        }
      }, {quoted:ownerq});
    }
  }
}
