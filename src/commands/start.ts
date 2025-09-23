import { Bot } from "grammy";
import { messages } from "../config/messages";

export function registerStartCommand(bot: Bot) {
  bot.command("start", (ctx) =>
    ctx.reply(messages.start, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "👤 درباره من", callback_data: "about" }],
          [{ text: "💻 مهارت‌ها", callback_data: "skills" }],
          [{ text: "📂 نمونه کارها", callback_data: "projects" }],
        ],
      },
    })
  );
}
