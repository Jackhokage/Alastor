import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw `𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎, 𝐏𝐎𝐑 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ale._2099`;
    }

    try {
        const apiUrl = `https://api.betabotz.eu.org/api/stalk/ig?username=${args[0]}&apikey=B29wmghC`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status && data.result) {
            const userInfo = data.result.user_info;

            const infoMessage = `
                *${userInfo.full_name}/@${userInfo.username}*

*Biografía:* ${userInfo.biography}
*Enlace externo:* ${userInfo.external_url}
*Cuenta privada:* ${userInfo.is_private ? 'Sí' : 'No'}
*Verificado:* ${userInfo.is_verified ? 'Sí' : 'No'}

*Estadísticas:*
Posts: ${userInfo.posts}
Seguidores: ${userInfo.followers}
Siguiendo: ${userInfo.following}
${userInfo.external_url}
            `;

            await conn.sendFile(m.chat, userInfo.profile_pic_url, 'profile_pic.jpg', infoMessage, m);
        } else {
            throw '𝐥𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐦𝐢 𝐞𝐬𝐭𝐢𝐦𝐚𝐝𝐨, 𝐧𝐨 𝐩𝐮𝐝𝐞 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬.';
        }
    } catch (error) {
        console.error(error);
        throw '𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐞𝐧 𝐥𝐚 𝐫𝐚𝐝𝐢𝐨, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞';
    }
};

handler.help = ['igstalk'];
handler.tags = ['dl'];
handler.command = ['igstalk'];

export default handler;


