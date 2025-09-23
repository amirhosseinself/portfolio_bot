import { Bot } from "grammy";
import { registerStartCommand } from "./commands/start";
import { registerAboutCommand } from "./commands/about";
import { registerSkillsCommand } from "./commands/skills";
import { registerProjectsCommand } from "./commands/projects";

const bot = new Bot(process.env.BOT_TOKEN!);

// ثبت دستورات
registerStartCommand(bot);
registerAboutCommand(bot);
registerSkillsCommand(bot);
registerProjectsCommand(bot);

export default bot;
