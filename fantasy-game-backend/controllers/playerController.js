const Player = require('../models/playerModel');

// Controller function to fetch all players from the database
const getPlayers = async (req, res) => {
  try {
    // Fetch all players using the Player model
    const players = await Player.find();
    // Respond with a JSON object containing all players
    res.json(players);
  } catch (error) {
    // Handle any potential server errors
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { getPlayers };

