import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN);

// وقتی کاربر /start بزنه
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

// هندل کردن کلیک روی دکمه‌ها
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

// لازم برای Vercel
export default webhookCallback(bot, "vercel");
