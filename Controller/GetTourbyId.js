const fs = require("fs");
const path = require("path");
const Tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
const filePath = path.join(__dirname, "../dev-data/data/tours-simple.json");

exports.GetTourbyId = (req, res) => {
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
};
