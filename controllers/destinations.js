const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
  create,
  show
};

async function create(req, res) {
  const flights = await Flight.findById(req.params.id);
  flights.destination.push(req.body);
  try {
    await flights.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${flights._id}/destinations`);
}

async function show(req, res) {
  const flights = Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      // Now you can pass both the flight and tickets in the res.render call
      res.render('flights/details', {flights}, {tickets});
    });
});
}