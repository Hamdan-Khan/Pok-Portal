import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import { useState } from "react";

function App() {
  /// Project: Pokédex
  // Build a React application that allows users to search for a Pokemon by name and displays its details, including its image, type(s), and abilities. Use the Pokemon API to fetch the Pokemon data.

  // Requirements:
  // · Use React to build the application.
  // · Use the Pokemon API (https://pokeapi.co/) to fetch data.
  // · The application should have a search bar where users can enter a Pokemon name.
  // · When the user submits the search, the application should fetch the Pokemon data and display it on the screen.
  // · The application should display the Pokemon's image, name, type(s), and abilities.
  // · Use CSS to style the application.
  // · Use Git to track changes and submit your code to a GitHub repository.

  // Bonus points:
  // · Add pagination to the search results.
  // · Allow users to search for Pokemon by type or ability.
  // · Add animations to the UI.

  // Tips:
  // · Break down the task into smaller components and build them one at a time.
  // · Use the fetch API or a third-party library like axios to make API calls.
  // · Use the useState and useEffect hooks to manage state and fetch data.
  // · Use CSS frameworks like Bootstrap or Material-UI to make styling easier.
  // · Make sure your code is well-documented and follows best practices.

  // Good luck!///

  const [fav, setFav] = useState(
    localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : []
  );
  return (
    <div className="bg-zinc-700 min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home fav={fav} setFav={setFav} />} path="/" />
          <Route
            element={<Favourites fav={fav} setFav={setFav} />}
            path="/fav"
          />
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
