import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

const Home = ({ fav, setFav }) => {
  const [search, setSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [result, setResult] = useState([]);
  const [click, setClick] = useState(0);
  const [offset, setOffset] = useState(0);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
    );
    setResult(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);
  useEffect(() => {
    setSearchVal(search);
  }, [click]);
  return (
    <div className="p-4">
      <div className="flex justify-center my-3">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-success w-full max-w-xs rounded-r-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-secondary rounded-l-none"
          onClick={() => setClick(click + 1)}
        >
          Search
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-2 lg:gap-6 md:gap-4 items-center justify-evenly">
        {!searchVal ? (
          <>
            {result?.map((poke) => {
              const { name } = poke;
              return <Card key={name} name={name} fav={fav} setFav={setFav} />;
            })}
          </>
        ) : (
          <>
            {<Card name={searchVal.toLowerCase()} fav={fav} setFav={setFav} />}
          </>
        )}
      </div>
      <Pagination setOffset={setOffset} offset={offset} />
    </div>
  );
};

export default Home;
