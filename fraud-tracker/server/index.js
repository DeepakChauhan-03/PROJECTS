require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const trackRoutes = require("./routes/track");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/track", trackRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => res.send("Fraud Tracker API running"));
 
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
