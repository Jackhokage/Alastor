var handler = async (m, { conn }) => {

let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length

conn.reply(m.chat, `*𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄𝐒 𝐓𝐎𝐓𝐀𝐋𝐄𝐒:* ${totalf}`, m )

}
handler.help = ['totalf']
handler.tags = ['database']
handler.command = ['total']

handler.register = false
handler.rowner = true

export default handler 