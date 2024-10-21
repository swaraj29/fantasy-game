import React, { useState } from 'react';
import PlayerList from './PlayerList';
import CreateTeam from './CreateTeam';
import './App.css';

function App() {
  // State to hold the players added to the team
  const [teamPlayers, setTeamPlayers] = useState([]);

  // Function to add a player to the team
  const addPlayerToTeam = (player) => {
    // Check if the team has less than 11 players
    if (teamPlayers.length < 11) {
      // Check if the player is already in the team
      if (!teamPlayers.some(p => p._id === player._id)) {
        // Add the player to the team if not already added
        setTeamPlayers([...teamPlayers, player]);
      } else {
        // Alert if the player is already in the team
        alert('Player is already in your team.');
      }
    } else {
      // Alert if the team is full (maximum 11 players)
      alert('Maximum 11 players allowed.');
    }
  };

  // Calculate total points of the team by summing the points of each player
  const totalPoints = teamPlayers.reduce((sum, player) => sum + player.points, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Fantasy Game</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Player List Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <PlayerList addPlayerToTeam={addPlayerToTeam} />
        </div>
        
        {/* User's Team Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Your Team</h2>
          <ul className="mb-4">
            {/* Display each player in the user's team */}
            {teamPlayers.map(player => (
              <li key={player._id} className="flex justify-between mb-2">
                <span>{player.name} - {player.points} pts</span>
              </li>
            ))}
          </ul>
          {/* Display total points of the team */}
          <h3 className="text-lg font-bold">Total Points: {totalPoints} pts</h3>
          {/* Button or component to create the team */}
          <CreateTeam teamPlayers={teamPlayers} />
        </div>
      </div>
    </div>
  );
}

export default App;
