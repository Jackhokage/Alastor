let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;✘⚡︎『ᴀsᴛʀᴀʟ』⚡︎✘;;\nFN:✘⚡︎『ᴀsᴛʀᴀʟ』⚡︎✘\nORG:✘⚡︎『ᴀsᴛʀᴀʟ』⚡︎✘\nTITLE:\nitem1.TEL;waid=5493804162033:5493804162033\nitem1.X-ABLabel:ASTRAL\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ALS\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝐀𝐒𝐓𝐑𝐀𝐋', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler