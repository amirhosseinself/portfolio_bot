import express from "express";
import { webhookCallback } from "grammy";
import bot from "./index.js";

const app = express();
app.use(express.json());

app.post("/api/bot", webhookCallback(bot, "express"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
