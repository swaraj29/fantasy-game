const Team = require('../models/teamModel');

// Controller function to create a new team
const createTeam = async (req, res) => {
  const { name, players } = req.body;
  // Validate input: name must be provided, players array must not exceed 11
  if (!name || !players || players.length > 11) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  try {
    // Create a new team instance with the provided name and players
    const team = new Team({ name, players });
    // Save the team to the database
    await team.save();
    // Respond with the created team
    res.json(team);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller function to get a team by its ID
const getTeamById = async (req, res) => {
  try {
    // Find the team by ID and populate the players field
    const team = await Team.findById(req.params.id).populate('players');
    // If the team is not found, return a 404 error
    if (!team) return res.status(404).json({ error: 'Team not found' });
    // Respond with the found team
    res.json(team);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { createTeam, getTeamById };

