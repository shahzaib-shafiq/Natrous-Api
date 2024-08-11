const fs = require("fs");
const path = require("path");
const Tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
const filePath = path.join(__dirname, "../dev-data/data/tours-simple.json");

exports.GetAllTours = async (req, res) => {
  // Define Tours or import it if needed

  res.status(200).json({
    status: "success",
    data: {
      Tours,
    },
  });
};
