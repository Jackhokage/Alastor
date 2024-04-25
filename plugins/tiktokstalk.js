import fetch from "node-fetch";
let handler = async (m, { conn, text }) => {
  if (!text)
    return conn.reply(
      m.chat,
      "⚠️ *_𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐃𝐄𝐒𝐄𝐀𝐃𝐎_*",
      m
    );
  await conn.reply(m.chat, global.wait, m);
  try {
    let res = await fetch(
      `https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`
    );
    let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    let json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    let img = await (await fetch(json.result.user_picture)).buffer();
    let ignyc = `*TikTok Stalking 𐂂*\n
 *⤿ 𐂂 Username:* ${json.result.username}
 *⤿ 𐂂 Nombre:* ${json.result.nickname}
 *⤿ 𐂂 Seguidores:* ${json.result.followers}
 *⤿ 𐂂 Siguiendo:* ${json.result.followings}
 *⤿ 𐂂 Likes:* ${json.result.likes}
 *⤿ 𐂂 Videos:* ${json.result.video}
 *⤿ 𐂂 Bio:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, "error.jpg", ignyc, m, false);
  } catch (e) {
    throw "𐂂 *_Error, No se encontro el nombre de usuario ingresado_*";
  }
};
handler.help = ["tiktokstalk *<usuario>*"];
handler.tags = ["downloader"];
handler.command = /^(tiktokstalk|ttstalk)$/i;
handler.register = false;
export default handler;