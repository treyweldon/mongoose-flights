const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  // show
};

async function newTicket(req, res) {
  const flights = await Flight.find({});
  const tickets = await Ticket.find({});
  res.render('flights/tickets', { tickets, flights });
}

async function create(req, res) {
  try {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
        Ticket.push(req.body)
       res.redirect(`flights/${_id}/destinations`)
      });
  });
    console.log(Flight.Ticket)
    res.redirect('/flights/:id/destinations');  
  } catch (err) {
    console.log(err);
    res.render('flights/tickets', { errorMsg: err.message });
  }
}