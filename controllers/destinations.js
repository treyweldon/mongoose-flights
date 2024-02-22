const Flight = require('../models/flight');

module.exports = {
  create,
};

async function create(req, res) {
  const flights = await Flight.findById(req.params.id);
  flights.destination.push(req.body);
  // res.render('flights/:id', {flights})

  console.log(flights.destination);
  try {
    await flights.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${flights._id}`);
}