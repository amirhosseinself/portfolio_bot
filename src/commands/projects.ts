import { Bot } from "grammy";
import { messages } from "../config/messages.js";

export function registerProjectsCommand(bot: Bot) {
  bot.hears("📂 نمونه کارها", async (ctx) => {
    await ctx.reply(messages.projects);
  });
}
