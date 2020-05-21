import mongoose, { ConnectionOptions } from "mongoose";

import config from "./config/config";

const dboptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(config.DB.URI, dboptions);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongodb connetion stablished");
});

connection.on("error", (err) => {
  console.log(err);
  // terminando la ejecucion
  process.exit(0);
});
