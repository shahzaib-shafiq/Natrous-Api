// Define the routes

exports.GetAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      Tours,
    },
  });
};
