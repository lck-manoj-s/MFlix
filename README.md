# DressUp

## Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)

## Overview
MFlix is a modern, React-based media browsing platform that leverages cutting-edge frontend tools to deliver a seamless user experience. Designed for developers, it emphasizes maintainability, performance,
and rapid iteration.

## Technology Stack
### 1. 💻 Frontend
- **React.js** – UI library for building interactive user interfaces.

- **Tailwind CSS** – Utility-first CSS framework for styling.

- **JavaScript (ES6+)** – Core scripting language.

### 2. 🤖 API Integration
- **TMDB API** – Get real-time movie data based on the categories like Trending & Top Rated.

### 3. 🌐 Backend
- **Node.js** – Runtime environment for running JavaScript on the server.

## Features
This project aims to create an engaging, scalable movie discovery application with a clean architecture.
The core features include:

- **Modern Tooling**: Built with Vite, React, and Tailwind CSS for fast development and optimized performance.

- **Utility-First Styling**: Streamlined styling workflows with PostCSS, Tailwind, and Autoprefixer.

- **Modular Components**: Reusable components like MovieCards, Banner, Navbar, enabling flexible UI composition.

- **Dynamic Data**: Real-time fetching from TMDB API for trending, top-rated, and personalized watchlists.

- **Developer Focus**: Configurable, maintainable codebase designed for rapid iteration and deployment.
  
## Project Structure
```
MFlix/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Home.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Paging.jsx
│   │   ├── TopRated.jsx
│   │   ├── Trending.jsx
│   │   ├── WatchList.jsx
│   │   └── WatchMovie.jsx
│   ├── MovieContext.jsx
│   ├── WatchContext.jsx
│   ├── index.jsx
│   └── App.jsx
├── assets/
│   ├── back.jpeg
│   └── genres.js
├── index.html
└── README.md
```

- `Banner.jsx`: Displays the banner of the home page.
- `Home.jsx`: Displays the home page of the website.
- `MovieCard.jsx`: Creates the card for each movie which can be reused.
- `Navbar.jsx`: Shows the navigation bar for the website.
- `Paging.jsx`: Used to control the paging action to generate more content.
- `TopRated.jsx`: Displays the movies related to Top Rated section.
- `Trending.jsx`: Displays the movies related to Trending section.
- `WatchList.jsx`: Creates the watchlist that users can see it from later points of time.
- `WatchMovie.jsx`: Shows details about the movies that are present in the watchlist.
- `MovieContext.jsx`: Used to create a context for movies.
- `WatchContext.jsx`: Used to create context for the watchlist.
- `index.jsx`: Main JS file that renders the app to the front-end.
- `App.jsx`: Wraps all the children elements & components
- `back.jpeg`: Image that is used as a background for the website.
- `genres.js`: A map that contains genres and their relative numeric equivaluents
  
## Installation
### 1. Clone the repository
`git clone https://github.com/yourusername/MFlix.git`

### 2. Install Necessary Dependencies
```
cd ..
npm install
```

## Usage
### 1. Start the system
```
npm run dev
```
