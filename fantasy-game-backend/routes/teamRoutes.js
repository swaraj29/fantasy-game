const express = require('express');
const { createTeam, getTeamById } = require('../controllers/teamController');
const router = express.Router();

// Create a new team
router.post('/teams', createTeam);

// Get a team by ID
router.get('/teams/:id', getTeamById);

module.exports = router;

