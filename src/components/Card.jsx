import React, { useEffect, useState } from "react";
import axios from "axios";
import Star from "./Star";

const Card = ({ name, fav, setFav }) => {
  const [types, setTypes] = useState([]);
  const [image, setImage] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [id, setId] = useState();
  const [abilities, setAbilities] = useState();
  const [consist, setConsist] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (res.status === 200) {
        const { sprites, types, id, abilities } = res.data;
        setTypes(types);
        const img = sprites.other;
        const official = img["official-artwork"];
        setPokeName(res.data.name);
        setImage(official.front_default);
        setId(id);
        setAbilities(abilities);
      }
    } catch (error) {}
  };

  const addToFav = () => {
    if (!consist) {
      setFav([...fav, pokeName]);
      localStorage.setItem("favs", JSON.stringify(fav));
      setConsist(true);
    } else {
      const newFav = fav.filter((x) => x !== pokeName);
      setFav(newFav);
      localStorage.setItem("favs", JSON.stringify(newFav));
    }
  };

  useEffect(() => {
    setConsist(fav.includes(pokeName));
  }, []);

  useEffect(() => {
    fetchData();
    console.log(consist);
    console.log(pokeName);
    console.log(fav.includes(pokeName));
  }, [name]);
  return (
    pokeName && (
      <div className="card w-[22%] min-w-[200px] md:h-[501px] flex-grow max-w-[300px] bg-base-100 shadow-xl my-2">
        <figure className="bg-zinc-200 p-3">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body p-3 py-5 md:p-4 lg:p-7">
          <h2 className="card-title">
            {pokeName ? pokeName.toUpperCase() : ""}
            <span
              className="ml-auto cursor-pointer tooltip tooltip-secondary"
              data-tip={`${
                consist ? "Remove from favourites" : "Add to favourites"
              }`}
              onClick={addToFav}
            >
              <Star toggle={consist ? true : false} />
            </span>
          </h2>
          <h3 className="text-zinc-500 text-lg font-semibold">#{id}</h3>
          <div className="card-actions items-center">
            <h2 className="font-semibold">Types:</h2>
            {types.map((typ) => {
              const { type, slot } = typ;
              const typeName = type.name;
              return (
                <div
                  key={slot}
                  className="badge badge-outline bg-green-600 py-2 text-white font-semibold capitalize"
                >
                  {typeName}
                </div>
              );
            })}
          </div>
          <div>
            <p className="font-semibold">Abilities:</p>
            <div className="flex flex-wrap">
              {abilities.map((x, index) => {
                const { ability } = x;
                return (
                  <p
                    key={index}
                    className="max-w-max bg-yellow-500 py-0.5 px-1 rounded-md text-white font-semibold mr-1 mb-1"
                  >
                    {ability.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
