const Ticket = require('../models/ticket');

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;

    const ticket = new Ticket({
      title,
      description,
    });

    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a ticket by ID
const updateTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.title = title || ticket.title;
    ticket.description = description || ticket.description;
    ticket.status = status || ticket.status;
    ticket.updatedAt = Date.now();

    await ticket.save();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    // const deleteMovie= await Movie.deleteOne({_id:paramID});
    //       res.json(deleteMovie);
    // await ticket.remove();
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
    
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
