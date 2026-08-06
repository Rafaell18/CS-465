const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// GET: /trips
const tripsList = async (req, res) => {
  const q = await Model.find({}).exec();

  if (!q) {
    return res.status(404).json({
      message: 'No trips found'
    });
  }

  return res.status(200).json(q);
};

// GET: /trips/:tripCode
const tripsFindByCode = async (req, res) => {
  const q = await Model.findOne({
    code: req.params.tripCode
  }).exec();

  if (!q) {
    return res.status(404).json({
      message: 'Trip not found'
    });
  }

  return res.status(200).json(q);
};

// POST: /trips
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Model.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// PUT: /trips/:tripCode
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Model.findOne({
      code: req.params.tripCode
    }).exec();

    if (!trip) {
      return res.status(404).json({
        message: 'Trip not found'
      });
    }

    trip.code = req.body.code;
    trip.name = req.body.name;
    trip.length = req.body.length;
    trip.start = req.body.start;
    trip.resort = req.body.resort;
    trip.perPerson = req.body.perPerson;
    trip.image = req.body.image;
    trip.description = req.body.description;

    await trip.save();

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};