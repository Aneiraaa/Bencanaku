const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const appRouter = require("./routes");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Router
app.use("/api/v1", appRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
