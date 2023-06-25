const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/index.js");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
