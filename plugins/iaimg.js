import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '> 𝚙𝚎𝚛𝚘 𝚍𝚒𝚖𝚎 𝚕𝚘 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊𝚜 𝚖𝚒 𝚎𝚜𝚝𝚒𝚖𝚊𝚍𝚘';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/imagine2?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;

    const response = await fetch(apiUrl);
    const buffer = await response.buffer();

    if (response.ok) {
      conn.sendFile(m.chat, buffer, 'imagen.jpg', '', m);
    } else {
      throw `
> 𝚄𝚙𝚜

𝚒𝚗𝚝𝚎𝚗𝚝𝚊𝚕𝚘 𝚖𝚊𝚜 𝚝𝚊𝚛𝚍𝚎 𝚖𝚒 𝚎𝚜𝚝𝚒𝚖𝚊𝚍𝚘, 𝚊𝚑𝚘𝚛𝚊 𝚎𝚜𝚝𝚘𝚢 𝚘𝚌𝚞𝚙𝚊𝚍𝚘`;
    }
  } catch (error) {
    throw `
> Sin respuesta

Ocurrió un error: ${error}`;
  }
};

handler.help = ['imagina'];
handler.tags = ['ai'];
handler.command = /^imagina|crea$/i;

export default handler;