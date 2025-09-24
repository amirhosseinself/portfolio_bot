import { Bot } from "grammy";
import { messages } from "../config/messages.js";

export function registerSkillsCommand(bot: Bot) {
  bot.hears("💻 مهارت‌ها", async (ctx) => {
    await ctx.reply(messages.skills);
  });
}
