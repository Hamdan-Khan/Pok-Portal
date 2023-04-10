import React from "react";
import { Link } from "react-router-dom";
import Star from "./Star";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary text-primary-content justify-between px-10">
      <Link to="/" className="font-bold text-2xl" href="/">
        PokéPortal
      </Link>
      <Link
        to="fav"
        className="flex gap-1 btn btn-ghost normal-case text-xl"
        href="/fav"
      >
        Favourites
        <Star toggle={true} />
      </Link>
    </div>
  );
};

export default Navbar;
