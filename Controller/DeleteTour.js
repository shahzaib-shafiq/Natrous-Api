exports.DeleteTour = (req, res) => {
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
};
