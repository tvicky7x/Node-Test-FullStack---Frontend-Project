import React from "react";

function InputField({ children, name, type = "text", req = false }) {
  return (
    <div className="flex flex-col space-y-2 pb-2">
      <label htmlFor="">{children}</label>
      <input
        required={req}
        className=" focus:outline-none ring-2 focus:ring-blue-300 p-1 rounded-md ring-slate-200"
        type={type}
        name={name}
        id=""
      />
    </div>
  );
}

export default InputField;
