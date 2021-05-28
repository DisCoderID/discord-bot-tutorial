const express = require("express")
const { Client } = require("discord.js")

const app = express()
const client = new Client()

app.get("/", (req, res) => res.sendStatus(200))
app.listen(process.env.PORT)

client.on("ready", () => console.log(`${client.user.username} ready to use!`))

client.on("message", msg => {
  if (msg.author.bot || !msg.guild) return;
  
  if (msg.content === "hello") msg.reply("Hewwo mate")
})

client.login()
