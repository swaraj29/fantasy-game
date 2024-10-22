# Basic Fantasy Game Feature Development

A simple fantasy game feature where users can create and manage their fantasy teams, similar to Dream11. This project is built using the **MERN** stack (MongoDB, Express.js, React, Node.js) with **Tailwind CSS** for styling.

## Table of Contents

- [Project Overview](#project-overview)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Backend API Endpoints](#backend-api-endpoints)
- [Frontend](#frontend)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Project Overview

The application allows users to create their fantasy teams by selecting players from a predefined list. Users can manage their teams, view player details, and calculate total points based on player attributes.

## Screenshots
https://github.com/swaraj29/fantasy-game/blob/main/screenshots/1.png
![Home Page](https://github.com/swaraj29/fantasy-game/raw/main/screenshots/1.png)
![Screenshot 2](https://github.com/swaraj29/fantasy-game/blob/main/screenshots/2.png)

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git

## Features

- Users can view a list of available players.
- Users can select players and create a fantasy team (max of 11 players).
- Users can view their team with player details and total points.
- Simple, clean, and responsive UI with Tailwind CSS.
- Backend API for managing players and teams.
- Basic error handling and form validation.

## Installation

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/fantasy-game.git
    cd fantasy-game
    ```

2. **Install Dependencies**
    ```sh
    cd fantasy-game-backend
    npm install
    cd ../fantasy-game-frontend
    npm install
    cd ..
    ```

3. **Setup .env File**
    Create a `.env` file in the `fantasy-game-backend` directory and add the following variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongo_uri
    ```

4. **Run the App**

    **Backend**:
    ```sh
    cd fantasy-game-backend
    npm run start
    ```

    **Frontend**:
    ```sh
    cd ../fantasy-game-frontend
    npm run dev
    ```

## Backend API Endpoints

- **GET /players**: Retrieve all available players.
- **POST /teams**: Create a new team.
- **GET /teams/:id**: Retrieve a specific team by ID.

## Frontend

The frontend is built using React and Tailwind CSS to provide a user-friendly interface. Users can:

- View a list of players with attributes.
- Create a team by selecting up to 11 players.
- View the details of their selected team and the total points.

## Environment Variables

Ensure you set up the necessary environment variables in the `.env` file to connect to your MongoDB database.

## Deployment

The application is deployed and can be accessed at [https://fantasyleaguev2.vercel.app/](https://fantasyleaguev2.vercel.app/).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For support or inquiries, please contact [028swarajkumar@gmail.com](mailto:028swarajkumar@gmail.com).
