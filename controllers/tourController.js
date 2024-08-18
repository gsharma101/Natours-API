const Tour = require('./../models/tourModel');

/*
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
*/

exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);

    // Build Query
    // 1A) Filtering
    const queryObj = {...req.query};
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(el => delete queryObj[el]);
    // console.log(req.query, queryObj);

    // 1B) Advance Filtering 
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(queryStr));

    let query = Tour.find(JSON.parse(queryStr));

    // 2) Sorting 

    if(req.query.sort){
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy)
      query = query.sort(sortBy);
      // sort('price ratingsAverage')
    } else {
      query = query.sort('-createdAt');
    }

    // 3) Field limiting 

    if(req.query.fields){
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }else{
      query = query.select('-__v');
    }

    // Execute Query
    const tours = await query;

     /*
    const query = await Tour.find()
    .where('duration')
    .equals(5)
    .where('difficulty')
    .equals('easy');
    */

    // 3. Send Response
    res.status(200).json({
      status: 'success',
      results: Tour.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.param.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    /*
  const newTour = new Tour({});
  newTour.save()
  */
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.param.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};
