const uploadImage = require('../lib/uploadImage')
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'balas gambarnya!'
  let media = await q.download()
  let url = await uploadImage(media)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/shaunthesheep', { url }, 'APIKEY'), 'shaunthesheep.mp4', watermark, m)
}
handler.help = ['shaunthesheep']
handler.tags = ['update']

handler.command = /^shaunthesheep|sts$/i

module.exports = handler
