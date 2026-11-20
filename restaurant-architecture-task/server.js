const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const MENU_FILE = path.join(DATA_DIR, "menu.json");
const RESERVATIONS_FILE = path.join(DATA_DIR, "reservations.json");

app.use(express.json());

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

app.get("/", (_req, res) => {
  res.json({
    message: "Restaurant mock API is running",
    endpoints: ["/api/menu", "/api/reservations"]
  });
});

app.get("/api/menu", (_req, res) => {
  res.json(readJson(MENU_FILE).menu);
});

app.get("/api/reservations", (_req, res) => {
  res.json(readJson(RESERVATIONS_FILE).reservations);
});

app.post("/api/reservations", (req, res) => {
  const { customerName, phone, guests, date, time } = req.body;

  if (!customerName || !phone || !date || !time ||
      !Number.isInteger(guests) || guests < 1) {
    return res.status(400).json({
      error: "customerName, phone, date, time and a positive integer guests value are required."
    });
  }

  const fileData = readJson(RESERVATIONS_FILE);
  const nextId = fileData.reservations.reduce((max, item) => Math.max(max, item.id), 0) + 1;

  const reservation = {
    id: nextId,
    customerName: String(customerName).trim(),
    phone: String(phone).trim(),
    guests,
    date,
    time,
    status: "pending",
    createdAt: new Date().toISOString()
  };

  fileData.reservations.push(reservation);
  writeJson(RESERVATIONS_FILE, fileData);
  return res.status(201).json(reservation);
});

app.delete("/api/reservations/:id", (req, res) => {
  const id = Number(req.params.id);
  const fileData = readJson(RESERVATIONS_FILE);
  const updated = fileData.reservations.filter(item => item.id !== id);

  if (updated.length === fileData.reservations.length) {
    return res.status(404).json({ error: "Reservation not found." });
  }

  fileData.reservations = updated;
  writeJson(RESERVATIONS_FILE, fileData);
  return res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Restaurant mock API running at http://localhost:${PORT}`);
});
