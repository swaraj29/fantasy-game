import React, { useState } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CreateTeam = ({ teamPlayers }) => {
  // State to hold the name of the team
  const [teamName, setTeamName] = useState('');

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a POST request to create a new team
      await axios.post(`${backendUrl}/api/teams`, {
        name: teamName, // The name of the team
        players: teamPlayers.map(player => player._id) // Extract player IDs from the teamPlayers array
      });
      // Alert the user that the team was created successfully
      alert('Team created successfully!');
      setTeamName(''); // Clear the team name input field
    } catch (error) {
      // Alert the user if the team creation failed
      alert('Failed to create team');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={teamName} // Bind the input value to the teamName state
        onChange={(e) => setTeamName(e.target.value)} // Update teamName state on input change
        placeholder="Team Name" // Placeholder text for the input field
        required // Mark the input as required
        className="border p-2 rounded w-full mb-2" // CSS classes for styling
      />
      <button 
        type="submit" // Button to submit the form
        className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
      >
        Create Team
      </button>
    </form>
  );
};

export default CreateTeam;
