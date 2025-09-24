import { Keyboard } from "grammy";

export const mainKeyboard = new Keyboard()
  .text("👤 درباره من")
  .text("💻 مهارت‌ها")
  .row()
  .text("📂 نمونه کارها")
  .text("📨 تماس")
  .resized(); // کیبورد جمع‌وجور
