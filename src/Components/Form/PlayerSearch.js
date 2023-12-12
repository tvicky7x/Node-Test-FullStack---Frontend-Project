import React, { useRef } from "react";
import PrimaryButton from "../Util/PrimaryButton";
import axios from "axios";

function PlayerSearch({ addPlayer }) {
  const searchInput = useRef();
  // searching player
  async function searchPlayer(e) {
    e.preventDefault();
    let res = await axios.post("/search-player", {
      search: searchInput.current.value,
    });
    addPlayer(res.data);
    e.target.reset();
  }

  return (
    <div className="bg-slate-900 text-white rounded overflow-hidden px-3 py-5 drop-shadow-md">
      <form
        onSubmit={searchPlayer}
        action=""
        method="post"
        className="grid grid-cols-6 gap-2"
      >
        <input
          ref={searchInput}
          placeholder="Player Search"
          type="text"
          className=" col-span-5 text-slate-800 focus:outline-none ring-2 focus:ring-blue-300 p-1 rounded-md ring-slate-200"
          name="search"
          id=""
        />
        <PrimaryButton type="submit">Search</PrimaryButton>
      </form>
    </div>
  );
}

export default PlayerSearch;
