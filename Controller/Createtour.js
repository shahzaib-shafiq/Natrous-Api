const fs = require("fs");
const path = require("path");
const Tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
const filePath = path.join(__dirname, "../dev-data/data/tours-simple.json");

exports.createTour = (req, res) => {
  console.log(req.body);

  // Check if Tours is an array and has elements
  if (!Array.isArray(Tours)) {
    return res.status(500).json({
      status: "error",
      message: "Tour data is not properly loaded",
    });
  }

  // Generate new ID
  const newId = Tours.length > 0 ? Tours[Tours.length - 1].id + 1 : 1;

  // Create new tour object
  const newTour = { id: newId, ...req.body };

  // Add new tour to the array
  Tours.push(newTour);

  // Write updated tours array to the file
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
};
/////////////////////////////
// const express = require("express");
// const router = express.Router();

// const fs = require("fs");
// const path = require("path");
// // const Tours = JSON.parse(
// //   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// // );
// const filePath = path.join(__dirname, "../dev-data/data/tours-simple.json");

// exports.createTour = (req, res) => {
//   console.log(req.body);
//   const newId = Tours[Tours.length - 1].id + 1;
//   const newTour = { id: newId, ...req.body };
//   Tours.push(newTour);
//   fs.writeFile(filePath, JSON.stringify(Tours, null, 2), (err) => {
//     if (err) {
//       return res.status(500).json({
//         status: "error",
//         message: "Could not write file",
//       });
//     }
//     res.status(201).json({
//       status: "success",
//       data: {
//         Tour: newTour,
//       },
//     });
//   });
// };
