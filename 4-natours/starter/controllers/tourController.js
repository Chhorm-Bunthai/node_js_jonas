const Tour = require('../models/tourModel');

exports.getAllTour = (req, res) => {
  // console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    // requestAt: req.requestTime,
    // result: tours.length,
    // data: tours,
  });
};
exports.getEachTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // if (!tour)
  //   return res.status(404).json({
  //     status: 'Kmean te',
  //     message: 'Invalid ID',
  //   });
  res.status(200).json({
    status: 'success',
    // message: {
    //   tour,
    // },
  });
};
exports.createTour = async (req, res) => {
  try {
    // console.log(req.body);
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: {
      tour: 'Updated tour',
    },
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
