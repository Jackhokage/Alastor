import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  try {

    const pp = imagen4;

    const img = './Menu2.jpg';

    const d = new Date(new Date + 3600000);

    const locale = 'es-ES';

    const week = d.toLocaleDateString(locale, {weekday: 'long'});

  const totalusr = Object.keys(global.db.data.users).length;

    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});

    const _uptime = process.uptime() * 1000;

    const uptime = clockString(_uptime);

    const user = global.db.data.users[m.sender];

    const {money, joincount} = global.db.data.users[m.sender];

    const {exp, limit, level, role} = global.db.data.users[m.sender];

    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;

    const rtotal = Object.entries(global.db.data.users).length || '0'

    const more = String.fromCharCode(8206);

    const readMore = more.repeat(850);

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

    const document = doc[Math.floor(Math.random() * doc.length)];

    await conn.sendMessage(m.chat, { react: { text: '🦌', key: m.key } })

    const str = `
       > 𝐀𝐋𝐀𝐒𝐓𝐎𝐑 𝐁𝐎𝐓 𝐁𝐘 𝐀𝐒𝐓𝐑𝐀𝐋
      𐂂𝚃𝙷𝙴 𝚁𝙰𝙳𝙸𝙾 𝙱𝙾𝚃𐂂
    𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 𝐀𝐋 𝐒𝐇𝐎𝐖 ${taguser}
> ╔> 𝐈𝐍𝐅𝐎 𝐃𝐄 𝐋𝐀 𝐓𝐑𝐀𝐍𝐒𝐌𝐈𝐒𝐈𝐎𝐍
> ╠> 𐂂ғᴇᴄʜᴀ:${date}
> ╠> 𐂂ᴅɪᴀ:${week}
> ╠> 𐂂ᴏʏᴇɴᴛᴇs:${totalusr}
> ╠> 𐂂ᴛɪᴇᴍᴘᴏ ᴀʟ ᴀɪʀᴇ:${uptime}
> ╚> 𝐒𝐈𝐆𝐀𝐍 𝐒𝐈𝐍𝐓𝐎𝐍𝐈𝐙𝐀𝐃𝐎𝐒
> ╔══════⬤▲•𐂂
> ╠𝐎𝐖𝐍𝐄𝐑
> ╠> ${usedPrefix}owner
> ╠> ${usedPrefix}total
> ╠𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
> ╠> ${usedPrefix}readviewonce *imagen*
> ╠> ${usedPrefix}encuesta
> ╠> ${usedPrefix}document
> ╠> ${usedPrefix}inspect
> ╠> ${usedPrefix}hd
> ╠> ${usedPrefix}calc
> ╠> ${usedPrefix}morce code/decode
> ╠> ${usedPrefix}chatvoz
> ╠> ${usedPrefix}tamaño
> ╠> ${usedPrefix}short *link*
> ╠> ${usedPrefix}shazam
> ╠> ${usedPrefix}ss
> ╠> ${usedPrefix}readqr
> ╠> ${usedPrefix}topdf
> ╠> ${usedPrefix}fake
> ╠> ${usedPrefix}tomp3
> ╠> ${usedPrefix}tourl
> ╠> ${usedPrefix}toptt
> ╠> ${usedPrefix}togifaud
> ╠> ${usedPrefix}igstalk
> ╠> ${usedPrefix}tiktokstalk
> ╠> ${usedPrefix}qr
> ╠> ${usedPrefix}spotifydl
> ╠> ${usedPrefix}whatsappstalk
> ╠> ${usedPrefix}clima
> ╠> ${usedPrefix}letra
> ╠> ${usedPrefix}ip
> ╠> ${usedPrefix}imagen
> ╠> ${usedPrefix}ytcom
> ╠𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒
> ╠> ${usedPrefix}s *responde a una imagen*
> ╠> ${usedPrefix}sinfondo
> ╠> ${usedPrefix}smeme
> ╠> ${usedPrefix}mixemoji
> ╠𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀 𝐀𝐑𝐓𝐈𝐅𝐈𝐂𝐈𝐀𝐋
> ╠> ${usedPrefix}bard *pregunta*
> ╠> ${usedPrefix}alastor *texto*
> ╠> ${usedPrefix}bimg *imagen*
> ╠> ${usedPrefix}crea
> ╠> ${usedPrefix}alastor2
> ╠𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
> ╠> ${usedPrefix}playdoc *cancion*
> ╠> ${usedPrefix}tiktok *enlace*
> ╠> ${usedPrefix}tiktokimagen
> ╠> ${usedPrefix}gitclone
> ╠𝐁𝐔𝐒𝐂𝐀𝐑
> ╠> ${usedPrefix}google
> ╠> ${usedPrefix}wikipedia
> ╠> ${usedPrefix}ytsearch
> ╠𝐁𝐎𝐓
> ╠> ${usedPrefix}serbot
> ╠> ${usedPrefix}radio
> ╠𝐆𝐑𝐔𝐏𝐎𝐒
> ╠> ${usedPrefix}invocar
> ╠> ${usedPrefix}del
> ╠> ${usedPrefix}chau
> ╠> ${usedPrefix}join
> ╠> ${usedPrefix}listanum/kicknum
> ╠𝐉𝐔𝐄𝐆𝐎𝐒
> ╠> ${usedPrefix}ttt
> ╠> ${usedPrefix}acertijo
> ╚*𝐌𝐄𝐍𝐔 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎...*

`.trim();

    if (m.isGroup) {

      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})

      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});

    } else {

      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})

      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});

    }

  } catch {

    conn.reply(m.chat, '*Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);

  }

};
handler.command = /^(menu|menú|Comandos|comandos|cmds|cmd|MENU|help|ayuda)$/i;

handler.exp = 50;

handler.fail = null;

export default handler;

function clockString(ms) {

  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);

  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;

  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;

  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');

}

