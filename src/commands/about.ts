import { Bot } from "grammy";
import { messages } from "../config/messages.js";

export function registerAboutCommand(bot: Bot) {
  bot.callbackQuery("about", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(messages.about);
  });
}
