import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse JSON request bodies

// authentication - version our api(/api/v1/auth) to save our old app customers along with new customers.
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v2/auth")

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
