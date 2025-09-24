import { Bot } from "grammy";
import { messages } from "../config/messages.js";
import { mainKeyboard } from "../config/keyboards.js";
import { prisma } from "../lib/prisma.js";

// Queue ساده برای ذخیره‌سازی کاربران
const logQueue: (() => Promise<void>)[] = [];
let isProcessingQueue = false;

// تابع پردازش queue
async function processQueue() {
  if (isProcessingQueue) return;
  isProcessingQueue = true;

  while (logQueue.length > 0) {
    const task = logQueue.shift();
    if (!task) continue;

    try {
      await task();
    } catch (err) {
      console.error("❌ خطا در پردازش queue:", err);
    }
  }

  isProcessingQueue = false;
}

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

    // افزودن عملیات لاگ گرفتن به queue
    logQueue.push(async () => {
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
        // می‌توانیم دوباره push کنیم یا retry logic اضافه کنیم
      }
    });

    // پردازش queue (اگر قبلاً فعال نبود)
    processQueue();
  });
}
