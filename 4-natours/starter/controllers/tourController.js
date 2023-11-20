const Tour = require('../models/tourModel');

exports.getAllTour = async (req, res) => {
  try {
    // build the query
    const queryObj = { ...req.query };
    const exCludeField = ['page', 'sort', 'fields', 'limit'];
    exCludeField.forEach((el) => {
      delete queryObj[el];
    });
    // console.log(req.query, queryObj)
    // const tours = await Tour.find(queryObj);// this will return a query
    const query = Tour.find(queryObj);

    // execute the query
    const tours = await query;

    // response
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fali',
      message: err,
    });
  }
};
exports.getEachTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      message: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fali',
      message: err,
    });
  }
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
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // it will return the new docs
      runValidatorsL: true,
    });
    res.status(200).json({
      status: 'success',
      message: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};
