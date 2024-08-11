const express = require("express");
const app = express();
const Createtour = require("./Routes/Createtour");
const getAllTours = require("./Routes/GetAllTours");
const getTourbyId = require("./Routes/GetTourbyId");
const PatchTour = require("./Routes/PatchTour");

// Other middlewares and routes
//app.use("/api", natrousget);

app.use("/api", Createtour);
app.use("/api", getAllTours);
app.use("/api", getTourbyId);
app.use("/api", PatchTour);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
