let handler = async m => m.reply(`
*Grup Official Forum Bot*

https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM

\`\`\`Jangan lupa join ya kak ${m.sender} 🥰\`\`\`
`.trim())
contextInfo: {
      mentionedJid: conn.m.sender
  }
handler.help = ['groupbot']
handler.tags = ['info', 'grup']
handler.command = /^(g(c|ro?up)bot)2$/i

module.exports = handler
