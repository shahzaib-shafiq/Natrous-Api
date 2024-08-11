const express = require("express");
const app = express();
const natrousget = require("./Routes/getdata");

// Other middlewares and routes
app.use("/api", natrousget);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
