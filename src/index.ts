import { Bot } from "grammy";
import { registerStartCommand } from "./commands/start.js";
import { registerAboutCommand } from "./commands/about.js";
import { registerSkillsCommand } from "./commands/skills.js";
import { registerProjectsCommand } from "./commands/projects.js";

const bot = new Bot(process.env.BOT_TOKEN!);

// ثبت دستورات
registerStartCommand(bot);
registerAboutCommand(bot);
registerSkillsCommand(bot);
registerProjectsCommand(bot);

export default bot;
