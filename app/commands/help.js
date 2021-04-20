const Discord = require('discord.js')
const {Prefıx} = require('../config.json')
let prefix = ("]")
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
`   
  
**  🎧 | DirekCehenneme Keyifli Dinlemeler Diler.**

** 🔹 Merhaba <@${message.author.id}> Hoşgeldin.**
**🔹 Prefixim : \`${prefix}\`**
 
<:tikk:825834810983317534>   \`${prefix}play <şarkı-adı>\` : Bir Şarkıyı Oynatır.
<:tikk:825834810983317534>   \`${prefix}skip\` : Sıradaki Şarkıyı atlar.
<:tikk:825834810983317534>   \`${prefix}queue\`: O Anki şarkıyı Hep tekrarlar.
<:tikk:825834810983317534>   \`${prefix}pause\` : O anki Şarkıyı durdurur.
<:tikk:825834810983317534>   \`${prefix}resume\` : Duran Şarkıyı Devam Ettirir.
<:tikk:825834810983317534>   \`${prefix}liste\` : Sıraya eklediğiniz şarkıları listeler.
<:tikk:825834810983317534>   \`${prefix}şarkıadı\` : Çalan Şarkının adını gösterir.

**DirekCehenneme Bot | 2021 © Tüm Hakları Saklıdır**

`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setColor("BLUE")
.setThumbnail("https://cdn.discordapp.com/attachments/814483180123193356/829305068397264896/LH9PSj.gif")
       )                  
}
}