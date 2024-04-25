import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `𝐇𝐎𝐋𝐀 ${taguser}!!
¿𝐂𝐎𝐌𝐎 𝐓𝐄 𝐄𝐍𝐂𝐔𝐄𝐍𝐓𝐑𝐀𝐒 𝐄𝐋 𝐃𝐈𝐀 𝐃𝐄 𝐇𝐎𝐘?*
𝐌𝐈 𝐍𝐎𝐌𝐁𝐑𝐄 𝐄𝐒 𝐀𝐋𝐀𝐒𝐓𝐎𝐑 𝐁𝐎𝐓

𐂂 Fecha: ${fecha}
𐂂 Hora: ${tiempo}

𐂂  𝐍𝐎 𝐌𝐄 𝐄𝐍𝐕𝐈𝐄𝐒 𝐒𝐏𝐀𝐌
𐂂  𝐄𝐒𝐂𝐑𝐈𝐁𝐄 *.menu* 𝐏𝐀𝐑𝐀 𝐕𝐄𝐑 𝐌𝐈 𝐌𝐄𝐍𝐔 
  
𝐔𝐍 𝐆𝐔𝐒𝐓𝐎 𝐂𝐎𝐍𝐎𝐂𝐄𝐑𝐓𝐄`, m, )


user.pc = new Date * 1
}