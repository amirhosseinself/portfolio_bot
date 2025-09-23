// app/api/bot/route.ts
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

bot.callbackQuery("about", (ctx) =>
  ctx
    .answerCallbackQuery()
    .then(() =>
      ctx.reply(
        "من یک برنامه‌نویس فرانت‌اند با تجربه در Next.js و TypeScript هستم."
      )
    )
);

bot.callbackQuery("skills", (ctx) =>
  ctx
    .answerCallbackQuery()
    .then(() =>
      ctx.reply(
        "مهارت‌ها: TypeScript, React, Next.js, Node.js, TailwindCSS و ..."
      )
    )
);

bot.callbackQuery("projects", (ctx) =>
  ctx
    .answerCallbackQuery()
    .then(() =>
      ctx.reply(
        "چند پروژه: وب‌اپ مدیریت اینستاگرام، داشبورد ادمین، سایت‌های شخصی و ..."
      )
    )
);

// 🔥 نکته مهم: اینجا باید به جای export default از export POST استفاده بشه
export const POST = webhookCallback(bot, "std/http");
