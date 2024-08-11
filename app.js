const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import route files
const Createtour = require("./Routes/Createtour");
const GetAllTours = require("./Routes/GetAllTours");
const getTourbyId = require("./Routes/GetTourbyId");
//const PatchTour = require("./Routes/PatchTour");

// Use route files
//app.use("/api", Createtour);
app.use("/api", GetAllTours);
// app.use("/api", getTourbyId);
// app.use("/api", PatchTour);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
