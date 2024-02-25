const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
};

async function newTicket(req, res) {
  const flights = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({});
  Ticket.create(req.body); 
  console.log("Ticket")
  res.render('flights/tickets', { tickets, flights });
}

async function create(req, res) {
  try { 
    console.log("CREATE")
    await Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
        // res.render('flights/details', {flight, tickets})
        res.redirect(`flights/${_id}/destinations`);
      });
  });
    console.log(Ticket)
    res.redirect('/flights/:id/destinations');  
  } catch (err) {
    console.log(err);
    res.render('flights/tickets', { errorMsg: err.message });
  }
}