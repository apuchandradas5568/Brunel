import React from "react";

export default function Button({ outline, text, arrow }) {
  return (
    <div>
        <button className={!outline? "p-4 transition flex items-center justify-center gap-4 px-6 bg-gray-900  text-white rounded-[2rem] hover:bg-gray-800" : "p-4 px-6 bg-white transition border hover:bg-gray-100 text-gray-900 rounded-[2rem] "}>{text} {arrow &&  <img src="./arrow.png" alt="arrow" /> }  </button>
    </div>
  );
}
