var handler = async (m, { conn, command }) => {

if (command == 'cuentas' || command == 'cuentasoficiales' || command == 'cuentasof') {
let str = `> 𝐂𝐔𝐄𝐍𝐓𝐀𝐒


⬡ *Instagram*


⬡ *YouTube*
${yt}

⬡ *WhatsApp Bot*
+5493804163755

⬡ *Email*
${email}`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🚩 *Grupos oficiales*

⬡ *CuriosityBot-MD*
${group}

⬡ *Enlaces Curiosity*
${group2}

⬡ *Curiosity Global*
${group3}

🎌 *Colaboraciones*

⬡ *Multi Bots*
${group4}

⬡ *NovaBot - CuriosityBot*
${group5}

⬡ *GataBot - CuriosityBot*
${group6}

⬡ *Curiosity - Criwilop*
${group7}

⬡ *CuriosityBot - SakuraBot*
${group8}

⬡ *OnyxBot - CuriosityBot*
${group9}

✨ *Canales oficiales*

⬡ *CuriosityBot*
${channel}

⬡ *INFINITY-WA*
${channel2}`

conn.reply(m.chat, text, m )
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentasofc|cuentas|grupos$/i

handler.register = true

export default handler