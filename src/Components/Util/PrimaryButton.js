import React from "react";

function PrimaryButton({
  children,
  type = "button",
  onClickFunction = () => {},
}) {
  return (
    <button
      className="bg-blue-500 px-2 py-1 text-white rounded-md hover:bg-blue-600"
      type={type}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
