const mongoose = require('mongoose');

// Define the player schema
const playerSchema = new mongoose.Schema({
  name: String, // Player's name
  position: String, // Player's position
  points: Number, // Player's points
});

// Create the Player model
const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
