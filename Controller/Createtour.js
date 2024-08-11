const { router } = require("express");

exports.createTour = (req, res) => {
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
};
