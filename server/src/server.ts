import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 8080;
const uri = process.env.DB_URI || "";

(async () => {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => {
      console.log(`[server] is running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
