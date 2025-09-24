import { Bot } from "grammy";
import { messages } from "../config/messages.js";
import { mainKeyboard } from "../config/keyboards.js";
import { prisma } from "../lib/prisma.js";

export function registerStartCommand(bot: Bot) {
  bot.command("start", async (ctx) => {
    if (!ctx.from) {
      console.error("❌ پیام فرستنده ناشناس (ctx.from = undefined)");
      return;
    }

    const { id, first_name, last_name, username } = ctx.from;

    // ارسال سریع پاسخ به کاربر
    await ctx.reply(messages.start, {
      reply_markup: mainKeyboard,
    });

    try {
      await prisma.user.upsert({
        where: { chatId: id.toString() },
        update: {},
        create: {
          chatId: id.toString(),
          firstName: first_name,
          lastName: last_name ?? null,
          username: username ?? null,
        },
      });
      console.log(`✅ کاربر لاگ شد: ${username || first_name} (${id})`);
    } catch (err) {
      console.error("❌ خطا در ذخیره‌سازی یوزر:", err);
    }
  });

  // هندلرها برای دکمه‌های کیبورد
  bot.hears("👤 درباره من", (ctx) => ctx.reply(messages.about));
  bot.hears("💻 مهارت‌ها", (ctx) => ctx.reply(messages.skills));
  bot.hears("📂 نمونه کارها", (ctx) => ctx.reply(messages.projects));
  bot.hears("📨 تماس", (ctx) => ctx.reply(messages.contact));
}
