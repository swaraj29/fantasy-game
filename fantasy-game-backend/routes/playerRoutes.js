const express = require('express');
const { getPlayers } = require('../controllers/playerController');
const router = express.Router();

// Get all players
router.get('/players', getPlayers);
module.exports = router;

