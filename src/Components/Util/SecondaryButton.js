import React from "react";

function SecondaryButton({
  children,
  type = "button",
  onClickFunction = () => {},
}) {
  return (
    <button
      className="bg-slate-200 px-2 py-1  rounded-md hover:bg-slate-300"
      type={type}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
