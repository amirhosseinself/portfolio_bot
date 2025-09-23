import express from "express";
import bot from "./index";
import { webhookCallback } from "grammy";

const app = express();
app.use(express.json());

app.post("/api/bot", webhookCallback(bot, "express"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
