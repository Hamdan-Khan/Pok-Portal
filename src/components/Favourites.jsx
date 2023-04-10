import React from "react";
import Card from "./Card";

const Favourites = ({ fav, setFav }) => {
  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap gap-2 lg:gap-6 md:gap-4 items-center justify-evenly">
        <>
          {fav?.map((poke) => {
            return <Card key={poke} name={poke} fav={fav} setFav={setFav} />;
          })}
        </>
      </div>
    </div>
  );
};

export default Favourites;
