
var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^Radiopresentacion$/i.test(m.text) && !chat.isBanned) {

conn.sendPresenceUpdate('composing', m.chat)    
conn.reply(m.chat, '*𝐒𝐀𝐋𝐔𝐃𝐎𝐒 𝐌𝐈 𝐄𝐒𝐓𝐈𝐌𝐀𝐃𝐎 𝐎 𝐄𝐒𝐓𝐈𝐌𝐀𝐃𝐀, 𝐄𝐒 𝐔𝐍 𝐆𝐔𝐒𝐓𝐎 𝐂𝐎𝐍𝐎𝐂𝐄𝐑𝐓𝐄, 𝐘𝐎 𝐒𝐎𝐘 𝐀𝐋𝐀𝐒𝐓𝐎𝐑 "𝐓𝐇𝐄 𝐑𝐀𝐃𝐈𝐎 𝐁𝐎𝐓" 𝐘 𝐂𝐎𝐌𝐎 𝐒𝐄𝐆𝐔𝐑𝐎 𝐘𝐀 𝐓𝐄 𝐃𝐈𝐒𝐓𝐄 𝐂𝐔𝐄𝐍𝐓𝐀 𝐒𝐎𝐘 𝐄𝐋 𝐁𝐎𝐓 𝐃𝐄 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎, 𝐄𝐒𝐓𝐎𝐘 𝐀𝐐𝐔𝐈 𝐏𝐀𝐑𝐀 𝐀𝐘𝐔𝐃𝐀𝐑𝐓𝐄 𝐘 𝐄𝐍𝐓𝐑𝐄𝐓𝐄𝐍𝐄𝐑𝐋𝐎𝐒, 𝐘𝐎 𝐘 𝐋𝐎𝐒 𝐀𝐃𝐌𝐈𝐍𝐒 𝐄𝐒𝐏𝐄𝐑𝐀𝐌𝐎𝐒 𝐐𝐔𝐄 𝐃𝐈𝐒𝐅𝐑𝐔𝐓𝐄𝐒 𝐓𝐔 𝐄𝐒𝐓𝐀𝐃𝐈𝐀 𝐀𝐐𝐔𝐈 𝐘 𝐍𝐎𝐒 𝐑𝐄𝐂𝐎𝐌𝐈𝐄𝐍𝐃𝐄𝐒 𝐀 𝐎𝐓𝐑𝐀𝐒 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒, 𝐒𝐎𝐋𝐎 𝐃𝐈 Alastor*', m )}

return !0

}
export default handler