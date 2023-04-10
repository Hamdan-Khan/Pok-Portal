import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import { useState } from "react";

function App() {
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
      <footer className="m-auto flex items-center gap-2 text-white justify-center my-1">
        <a
          href="https://hamdan-k.me"
          className="mx-1 hover:underline duration-300"
        >
          &#169;Hamdan-Khan
        </a>
        <a
          href="https://github.com/Hamdan-Khan/virtual-urdu-keyboard"
          target="_blank"
          className="mx-1 flex hover:font-medium items-center justify-center duration-300"
        >
          <span className="material-symbols-outlined mb-1">star</span>Star this
          repo
        </a>
      </footer>
    </div>
  );
}

export default App;
