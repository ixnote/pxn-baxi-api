import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

import errorHandler from "./app/middleware/error.js";

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// simple route
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to PXN-baxi application." });
});

//routes
import routes from "./app/routes/index.routes.js";
routes(app);
app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process
  // server.close(() => process.exit(1));
  process.exit(0);
});
