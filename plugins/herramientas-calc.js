const handler = async (m, {conn, text}) => {
  const id = m.chat;
  conn.math = conn.math ? conn.math : {};
  if (id in conn.math) {
    clearTimeout(conn.math[id][3]);
    delete conn.math[id];
    m.reply('𝐇𝐄𝐘, 𝐇𝐀𝐂𝐄𝐒 𝐓𝐑𝐀𝐌𝐏𝐀');
  }
  const val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');
  const format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');
  try {
    console.log(val);
    const result = (new Function('return ' + val))();
    if (!result) throw result;
    m.reply(`*${format}* = _${result}_`);
  } catch (e) {
    if (e == undefined) throw '*[𝐈𝐍𝐅𝐎] 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐋𝐀 𝐎𝐏𝐄𝐑𝐀𝐂𝐈𝐎𝐍 𝐐𝐔𝐄 𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐑*';
    throw '*𝐅𝐎𝐑𝐌𝐀𝐓𝐎 𝐍𝐎 𝐀𝐃𝐌𝐈𝐓𝐈𝐃𝐎, 𝐒𝐎𝐋𝐎 𝐒𝐄 𝐏𝐄𝐑𝐌𝐈𝐓𝐄𝐍 𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐘 𝐍𝐔𝐌𝐄𝐑𝐎𝐒 𝐂𝐎𝐌𝐎 -, +, *, /, ×, ÷, π, e, (, )*';
  }
};
handler.help = ['calc <expression>'];
handler.tags = ['tools'];
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i;
handler.exp = 5;
export default handler;
