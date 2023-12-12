import React from "react";
import SecondaryButton from "../Util/SecondaryButton";
import DeleteButton from "../Util/DeleteButton";

function PlayerDisplay({ player, editMode, deletePlayer }) {
  if (player === "") {
    return <></>;
  }
  if (player === "Player not found!!!") {
    return <div className=" font-semibold text-2xl">{player}</div>;
  } else {
    return (
      <>
        <div className=" grid grid-cols-3 py-6 gap-2">
          <div>
            <img
              src={player.imageUrl}
              alt=""
              className="w-40 h-40 object-cover object-center rounded-md"
            />
            <p className=" mt-5 font-medium text-lg">
              Name :{" "}
              <span className=" font-semibold text-blue-700">
                {player.name}
              </span>
            </p>
            <p className=" font-medium text-lg">
              Birthday :{" "}
              <span className=" font-semibold">
                {new Date(player.birthday).toLocaleDateString()}
              </span>
            </p>
            <p className="  font-medium text-lg">
              Birth Place :{" "}
              <span className=" font-semibold">{player.birthplace}</span>
            </p>
          </div>
          <div className=" col-span-2 self-center">
            <p className=" font-semibold text-2xl">{player.name}</p>
            <p className=" mt-3">{player.profile}</p>
          </div>
        </div>
        <div className=" flex justify-end items-center space-x-3 pb-7">
          <SecondaryButton onClickFunction={() => editMode(player)}>
            Edit Player
          </SecondaryButton>
          <DeleteButton
            onClickFunction={() => {
              deletePlayer(player);
            }}
          >
            Delete Player
          </DeleteButton>
        </div>
      </>
    );
  }
}

export default PlayerDisplay;
