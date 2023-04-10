import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Favourites = ({ fav, setFav }) => {
  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap gap-2 lg:gap-6 md:gap-4 items-center justify-evenly">
        {fav.length > 0 ? (
          <>
            {fav?.map((poke) => {
              return <Card key={poke} name={poke} fav={fav} setFav={setFav} />;
            })}
          </>
        ) : (
          <div className="flex flex-col gap-8 my-6">
            <h1 className="font-bold text-4xl text-white">
              No favourite pokemons!
            </h1>
            <Link className="btn btn-secondary text-xl mx-auto" to={"/"}>
              Go back
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
