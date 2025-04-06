import app from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  });
