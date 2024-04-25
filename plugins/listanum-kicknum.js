var handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {

if (!args[0]) return conn.reply(m.chat, ` *Debera ingresar el prefijo de un país*\n\nEjemplo, !${command} +51`, m )
if (isNaN(args[0])) return conn.reply(m.chat, ` *Ingresa el prefijo del país*`, m,)
 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol))
let bot = global.db.data.settings[conn.user.jid] || {}

if (ps == '') return conn.reply(m.chat, ` *No hay números ${lol}*`, m)
let numeros = ps.map((v)=> '• @' + v.replace(/@.+/, ''))
let delay = (time) => new Promise((res)=>setTimeout(res, time))
switch (command) {

case 'listanum':
conn.reply(m.chat, ` *Lista de números ${lol}*\n\n` + numeros.join`\n`, m, {mentions: ps})
break

case 'kicknum':
if (!isBotAdmin) return conn.reply(m.chat, '*No soy administrador*', m, fake, )
conn.reply(m.chat, ` *Se eliminaran los números ${lol} cada 10 segundos*`, m )
const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol))
for (const user of users) {
const error = ` @${user.split('@')[0]} *Ya ha sido eliminado o abandonó el grupo*`
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin) {
await delay(2000)
const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)})
await delay(10000)
} else return conn.reply(m.chat, ' *Ocurrió un error*', m, )
}
break
}

}
handler.tags = ['grupo']
handler.help = ['listanum', 'kicknum']
handler.command = /^(listanum|kicknum)$/i

handler.group = true
handler.botAdmin = true
handler.admin = true

handler.fail = null

export default handler