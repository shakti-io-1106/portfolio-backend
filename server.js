const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

// Middleware
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
