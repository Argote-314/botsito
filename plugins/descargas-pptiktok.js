import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ ππππππ πππ πππΌπ "@"\nπππππππ\n*${usedPrefix + command} mundo_dos_animes81*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `β ππππ πΏπ ππππππ*${text}*`, m, false)
  
  let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, 'The Lolibot-ππΏ', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,) 

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
