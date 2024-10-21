const mongoose = require('mongoose');

// Define the team schema
const teamSchema = new mongoose.Schema({
  
  name: String,
  // Array of player IDs
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
});

// Create the Team model
const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
