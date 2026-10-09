import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();
const app = express();
const port = Number(process.env.PORT || 3000);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public"), { index: "index.html" }));

const validCodes = {
  door: process.env.DOOR_PASSCODE,
  west: process.env.WEST_PASSCODE,
  east: process.env.EAST_PASSCODE
};

app.post("/api/unlock", (req, res) => {
  const { lock, passcode } = req.body ?? {};
  if (!Object.hasOwn(validCodes, lock) || typeof passcode !== "string") {
    return res.status(400).json({ ok: false, message: "Invalid request." });
  }
  const expected = validCodes[lock];
  if (!expected) {
    return res.status(500).json({ ok: false, message: "This lock is not configured." });
  }
  if (passcode.trim().toUpperCase() !== expected.trim().toUpperCase()) {
    return res.status(401).json({ ok: false, message: "ACCESS DENIED // PASSCODE NOT RECOGNIZED" });
  }
  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`NF Foundation running at http://localhost:${port}`);
});
