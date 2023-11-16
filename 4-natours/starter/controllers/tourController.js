
const fs = require('fs');
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );

exports.checkBody = (req, res, next) =>{
    if (!req.body.name || !req.body.price){
        return res.status(400).json({
            status: "fail",
            message: "Must have a name or price"
        });
    }
    next();
}

exports.checkId = (req, res, next, val)=>{
    console.log("Tour Id is ",val)
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
          status: 'Ot tv te',
          message: 'Invalid ID',
        });
      }
    next();
};
exports.getAllTour = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
      status: 'success',
      requestAt: req.requestTime,
      result: tours.length,
      data: tours,
    });
  };
  exports.getEachTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);
    if (!tour)
      return res.status(404).json({
        status: 'Kmean te',
        message: 'Invalid ID',
      });
    res.status(200).json({
      status: 'success',
      message: {
        tour,
      },
    });
  };
  exports.createTour = (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        res.status(201).json({
          status: 'success',
          data: {
            tours,
          },
        });
      }
    );
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