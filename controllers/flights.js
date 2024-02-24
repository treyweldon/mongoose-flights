const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', {
    flights
  });
}

async function newFlight(req, res) {
  const flights = await Flight.find({});
  res.render('flights/new', {flights});
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    res.redirect('/flights');  
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

async function show(req, res) {
  const flights = await Flight.findById(req.params.id);
  res.render('flights/details', {flights});
}