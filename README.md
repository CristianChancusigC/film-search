# 🎬 Film Search App

This is a React JS application that allows users to search for films using the [OMDb API](https://www.omdbapi.com/). The app demonstrates best practices for consuming APIs in React and focuses on writing clean, efficient code.

[Live Demo](https://cristianchancusigc.github.io/film-search/)

## 🔍 Features

Search for Films: Users can search for movies and display the results in a clean, user-friendly format.
Real-Time Search: Utilizes debounce to avoid unnecessary API calls.
Efficient State Management: Implements hooks like useMemo, useCallback, and custom hooks to optimize performance.
Clean Code: Focused on readability and maintainability through best coding practices.

## 🚀 Live Demo

Check out the live version of the portfolio [here](https://cristianchancusigc.github.io/film-search/).

## 📥 Installation and Usage

1. Clone the Repository:

```console
   git clone https://github.com/CristianChancusigC/film-search.git
   cd my-portfolio
```

2. Install Dependencies:

```console
   npm install
```

3. Set Up the API Key:

- Visit OMDB API to get your API key.
- Create a `.env` file in the project root directory with the following content:

```console
VITE_KEY_API = "your API Key"
```

4. Run the Development Server:

```console
    npm run dev
```

5. Open the local development link in your browser to view the project.

## Requirements

- Vite
- Tailwind CSS
- Node.js/npm
- just-debounce-it

## 🎯 Challenges & Learnings

This project was an opportunity to:

Learn new hooks: `useMemo`, `useCallback`, and custom hooks for improved code organization and performance.
Implement debounce: Used debounce to optimize API calls and improve the user experience.
