import { Bot } from "grammy";
import { messages } from "../config/messages.js";

export function registerProjectsCommand(bot: Bot) {
  bot.callbackQuery("projects", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(messages.projects);
  });
}
