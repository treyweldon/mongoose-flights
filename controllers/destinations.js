const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
  create,
  show
};

async function create(req, res) {
  const flights = await Flight.findById(req.params.id);
  // const tickets = await Ticket.find(req.params.id);
  flights.destination.push(req.body);
  try {
    await flights.save();
  } catch (err) {
    console.log(err);
  }
  console.log("create")
  res.redirect(`/flights/${flights._id}/destinations`);
}

async function show(req, res) {
  const flights = Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/details', {flights, tickets});
    });
    console.log("SHOW")
});
}