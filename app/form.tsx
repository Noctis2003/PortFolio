"use client";

import { useState } from "react";
import sendMail from "./actions";

function Form() {
  const [value, setvalue] = useState("");
 const [placeholder, setPlaceholder] = useState("Message me...");
  const handleClick = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.currentTarget);
        setPlaceholder("Sending...");
        setvalue("");
        await sendMail(formData);
        setPlaceholder("Message sent... Send new message");  
    } catch (error) {
      setPlaceholder("Error sending message");
        console.log(error);
    }
  
      };

  return (
    <form
      className="flex flex-row  p-4 rounded-lg"
      method="POST"
      onSubmit={handleClick}
    >
      <input
        name="text"
        className="w-full border-[2px] border-gray-300 rounded-lg px-4 py-2"
        value={value}
        placeholder={placeholder}
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
