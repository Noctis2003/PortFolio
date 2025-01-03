"use client";

import { useState } from "react";
import sendMail from "./actions";

function Form() {
  const [value, setvalue] = useState("");

  const handleClick = () => {
    setvalue("");
  };

  return (
    <form
      className="flex flex-row  p-4 rounded-lg"
      action={sendMail}
      method="POST"
      onSubmit={handleClick}
    >
      <input
        name="text"
        className="w-full border-[2px] border-gray-300 rounded-lg px-4 py-2"
        value={value}
        placeholder="Message me..."
        onChange={(e) => setvalue(e.target.value)}
        type="text"
        required
      />
      <button
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
