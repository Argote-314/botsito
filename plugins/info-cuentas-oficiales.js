let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
π° π½ππππππππΏπ(πΌ) πΌ ππΌπ πΎπππππΌπ ππππΎππΌπππ
βββββββββββββββββ
*nunero del bot ofc*
π° *wa.me/447441419651*
π° *wa.me/50495745934*
π° *wa.me/56936442119*
βββββββββββββββββ
β *GITHUB*
*${md}*
βββββββββββββββββ
β *grupos - ASISTENCIA*
*https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*
βββββββββββββββββ
*Si tienen dudas, sugerencias, o preguntas escribi por el grupo*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Subbotsito/The-LoliBot-MD', 'The Lolibot-MD', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ π°', '.grupos'],
['πΎπ§ππππ€π§ π', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
