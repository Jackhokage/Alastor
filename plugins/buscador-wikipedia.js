import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*Uso incorrecto del comando!!*\n*uso correcto:*\n*${usedPrefix + command} 𝙿𝚊𝚕𝚊𝚋𝚛𝚊 𝚌𝚕𝚊𝚟𝚎 𝚊 𝚋𝚞𝚜𝚌𝚊𝚛*\n\n*ejemplo:*\n*${usedPrefix + command} Estrellas*`;
  wikipedia(`${text}`).then((res) => {
    m.reply(`*𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙰:*\n\n` + res.result.isi);
  }).catch(() => {
    m.reply('*no se encontro ninguna informacion, prueba que hayas escrito una sola palabra y la hayas escrito bien*');
  });
};
handler.help = ['wikipedia'].map((v) => v + ' <apa>');
handler.tags = ['internet'];
handler.command = /^(wiki|wikipedia)$/i;
export default handler;
