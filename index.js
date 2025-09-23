import express from "express";
import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN);

// دستورات ربات
bot.command("start", (ctx) =>
  ctx.reply("سلام! 👋 من ربات رزومه‌ی امیرحسین هستم.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "👤 درباره من", callback_data: "about" }],
        [{ text: "💻 مهارت‌ها", callback_data: "skills" }],
        [{ text: "📂 نمونه کارها", callback_data: "projects" }],
      ],
    },
  })
);

bot.callbackQuery("about", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(
    "من یک برنامه‌نویس فرانت‌اند با تجربه در Next.js و TypeScript هستم."
  );
});

bot.callbackQuery("skills", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(
    "مهارت‌ها: TypeScript, React, Next.js, Node.js, TailwindCSS و ..."
  );
});

bot.callbackQuery("projects", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(
    "چند پروژه: وب‌اپ مدیریت اینستاگرام، داشبورد ادمین، سایت‌های شخصی و ..."
  );
});

// Express
const app = express();
app.use(express.json());

app.post("/api/bot", (req, res) => {
  console.log("Received update:", req.body);
  webhookCallback(bot, "express")(req, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
