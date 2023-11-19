const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Hush kelibsiz!");
});

bot.command("myid", (ctx) => {
  ctx.reply(`<b>Sizning ID : </b><code>${ctx.from.id}</code>`, {
    parse_mode: "HTML",
  });
});

bot.hears("Saidqodirxon", (ctx) => {
  ctx.reply("@RealCoderUz ");
});

bot.launch();

console.log("bot ishladi");
