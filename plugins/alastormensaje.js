var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^Alastor$/i.test(m.text) && !chat.isBanned) {

conn.sendPresenceUpdate('composing', m.chat)    
conn.reply(m.chat, '*𝐒𝐀𝐋𝐔𝐃𝐎𝐒 𝐌𝐈 𝐄𝐒𝐓𝐈𝐌𝐀𝐃𝐎 𝐎 𝐄𝐒𝐓𝐈𝐌𝐀𝐃𝐀, 𝐄𝐒 𝐔𝐍 𝐏𝐋𝐀𝐂𝐄𝐑 𝐂𝐎𝐍𝐎𝐂𝐄𝐑𝐓𝐄, 𝐏𝐀𝐑𝐀 𝐕𝐄𝐑 𝐌𝐈𝐒 𝐂𝐀𝐏𝐀𝐂𝐈𝐃𝐀𝐃𝐄𝐒 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐄𝐒𝐂𝐑𝐈𝐁𝐀 .menu*', m )}

return !0

}
export default handler