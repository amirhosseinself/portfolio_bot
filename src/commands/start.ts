import { Bot } from "grammy";
import { messages } from "../config/messages.js";
import { prisma } from "../lib/prisma.js";

export function registerStartCommand(bot: Bot) {
  bot.command("start", async (ctx) => {
    if (!ctx.from) {
      console.error("❌ پیام فرستنده ناشناس بود (ctx.from = undefined)");
      return;
    }

    const { id, first_name, last_name, username } = ctx.from;

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

    await ctx.reply(messages.start, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "👤 درباره من", callback_data: "about" }],
          [{ text: "💻 مهارت‌ها", callback_data: "skills" }],
          [{ text: "📂 نمونه کارها", callback_data: "projects" }],
        ],
      },
    });
  });
}
