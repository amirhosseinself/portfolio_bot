import { Bot } from "grammy";
import { messages } from "../config/messages";

export function registerSkillsCommand(bot: Bot) {
  bot.callbackQuery("skills", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(messages.skills);
  });
}
