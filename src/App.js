import React, { useState } from "react";
import "./App.css";
import PlayerForm from "./Components/Form/PlayerForm";
import PlayerSearch from "./Components/Form/PlayerSearch";
import PlayerDisplay from "./Components/Display/PlayerDisplay";
import axios from "axios";

function App() {
  const [player, setPlayer] = useState("");
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    birthday: "",
    birthplace: "",
    profile: "",
  });
  const [edit, setEdit] = useState(false);

  // adding player to state
  function addPlayer(data) {
    setPlayer(data);
  }

  // editing player
  function editMode(player) {
    setForm(player);
    setEdit(true);
  }

  async function deletePlayer(data) {
    await axios.delete("/delete-player", { data });
    setPlayer("");
  }

  function cancelEdit() {
    setForm({
      name: "",
      imageUrl: "",
      birthday: "",
      birthplace: "",
      profile: "",
    });
    setEdit(false);
  }

  return (
    <div className=" text-slate-800 font-noto px-2">
      <div className=" max-w-2xl mx-auto">
        <h1 className=" text-4xl text-center font-semibold py-4">
          Player Info Board
        </h1>
        <PlayerForm form={form} edit={edit} cancelEdit={cancelEdit} />
        <div className="py-3"></div>
        <PlayerSearch addPlayer={addPlayer} />
        <div className="py-3"></div>
        <PlayerDisplay
          player={player}
          editMode={editMode}
          deletePlayer={deletePlayer}
        />
      </div>
    </div>
  );
}

export default App;
