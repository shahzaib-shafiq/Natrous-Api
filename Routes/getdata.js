const express = require("express");
const fs = require("fs");
const path = require("path");
const { NUMBER } = require("sequelize");

const app = express();
const filePath = path.join(__dirname, "tours-simple.json");

// Read tours data
let Tours = JSON.parse(fs.readFileSync(filePath, "utf-8"));

app.use(express.json());

// Define the routes
app.get("/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      Tours,
    },
  });
});

app.get("/v1/tours/:id", (req, res) => {
  const id = (req.params.id = 1);
  const tour = Tours.find((el) => (el.id = id));

  //if (id > Tours.length)
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

app.patch("/v1/tours/:id", (req, res) => {
  const id = (req.params.id = 1);
  const tour = Tours.find((el) => (el.id = id));

  //if (id > Tours.length)
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
  res.status(200).json({
    status: "Update success",
    data: {
      //updated tour data
      tour,
    },
  });
});

app.delete("/v1/tours/:id", (req, res) => {
  const id = (req.params.id = 1);
  const tour = Tours.find((el) => (el.id = id));

  //if (id > Tours.length)
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
  res.status(200).json({
    status: "Delete success",
    data:
      //updated tour data
      null,
  });
});

app.post("/v1/tours", (req, res) => {
  console.log(req.body);
  const newId = Tours[Tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };
  Tours.push(newTour);
  fs.writeFile(filePath, JSON.stringify(Tours, null, 2), (err) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Could not write file",
      });
    }
    res.status(201).json({
      status: "success",
      data: {
        Tour: newTour,
      },
    });
  });
});

// Export app for testing or further use
module.exports = app;
