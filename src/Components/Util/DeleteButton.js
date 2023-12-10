import React from "react";

function DeleteButton({
  children,
  type = "button",
  onClickFunction = () => {},
}) {
  return (
    <button
      className="bg-red-500 px-2 py-1 text-white rounded-md hover:bg-red-600"
      type={type}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default DeleteButton;
