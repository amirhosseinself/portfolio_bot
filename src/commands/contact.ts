import { Bot, InlineKeyboard } from "grammy";
import { messages } from "../config/messages.js";

export function registerContactCommand(bot: Bot) {
  bot.hears("📨 تماس", async (ctx) => {
    const contactKeyboard = new InlineKeyboard()
      .url("🌐 وبسایت", "https://amirho-dev.ir")
      .row()
      .url("💼 لینکدین", "https://linkedin.com/in/amirhossein-aghamohammadi")
      .row()
      .url("📬 تلگرام", "https://t.me/amirhossein_v2");

    await ctx.reply(messages.contact, {
      reply_markup: contactKeyboard,
    });
  });
}
