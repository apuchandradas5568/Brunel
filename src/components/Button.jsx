import React from "react";

export default function Button({ outline, text }) {
  return (
    <div>
        <button className={!outline? "p-4 transition bg-gray-900  text-white rounded-[2rem] hover:bg-gray-800" : "p-4 bg-white transition border hover:bg-gray-100 text-gray-900 rounded-[2rem] "}>{text}</button>
    </div>
  );
}
