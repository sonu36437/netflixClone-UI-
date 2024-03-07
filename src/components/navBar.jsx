import React from "react";

const navBar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full absolute z-[100]">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFILX
      </h1>
      <div className="">
        <button className="text-white pr-4 ">Sign In</button>
        <button className="bg-red-600 py-2 px-6 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default navBar;
