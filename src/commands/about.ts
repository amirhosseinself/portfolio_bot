import { Bot } from "grammy";
import { messages } from "../config/messages.js";

export function registerAboutCommand(bot: Bot) {
  bot.hears("👤 درباره من", async (ctx) => {
    await ctx.reply(messages.about);
  });
}
