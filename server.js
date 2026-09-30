/**
 * vallee.pro — minimal Express server
 * Serves the static site in ./public on the port cPanel provides.
 */
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets
app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

// SPA-style fallback: any unknown path gets the homepage
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`vallee.pro listening on port ${PORT}`);
});