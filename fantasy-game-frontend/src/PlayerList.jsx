import React, { useEffect, useState } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const PlayerList = ({ addPlayerToTeam }) => {
  // State to hold the list of players
  const [players, setPlayers] = useState([]);

  // Effect to fetch players from the server when the component mounts
  useEffect(() => {
    const fetchPlayers = async () => {
      // Make a GET request to fetch players data
      const { data } = await axios.get(`${backendUrl}/api/players`);
      // Update the state with the fetched players
      setPlayers(data);
    };
    fetchPlayers(); // Call the function to fetch players
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Players</h2>
      <ul className="space-y-2">
        {/* Map through the players and create a list item for each */}
        {players.map(player => (
          <li key={player._id} className="flex justify-between items-center bg-gray-100 p-3 rounded shadow">
            {/* Display player name, position, and points */}
            <span>{player.name} ({player.position}) - {player.points} pts</span>
            {/* Button to add the player to the team */}
            <button 
              onClick={() => addPlayerToTeam(player)} // Call the function passed via props with the selected player
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
