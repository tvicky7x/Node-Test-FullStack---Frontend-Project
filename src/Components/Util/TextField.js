import React from "react";

function TextField({ children, name, req = false, defaultValue='' }) {
  return (
    <div className="flex flex-col space-y-2 pb-2">
      <label htmlFor="">{children}</label>
      {/* <input
    required={req}
    className=""
    type={type}
    name={name}
    id=""
  /> */}
      <textarea
      defaultValue={defaultValue}
        className=" focus:outline-none ring-2 focus:ring-blue-300 p-1 rounded-md ring-slate-200"
        name={name}
        required={req}
        id=""
        cols="30"
        rows="3"
      ></textarea>
    </div>
  );
}

export default TextField;
