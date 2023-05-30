import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const navigateToProfile = () => {
    if (name.trim()) {
      localStorage.setItem("profileName", JSON.stringify(name));
      navigate("/profile");
    } else {
      setName("");
    }
  };
  return (
    <div className="h-screen grid place-content-center gap-[5rem]  ">
      <h1 className="text-2xl font-bold text-white text-center px-4">
        Welcome to the Acyclic's Assignment
      </h1>
      <div className="flex gap-2 w-full">
        <input
          maxLength={15}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          className="w-full backdrop-blur placeholder:text-[#ebede1] rounded-md bg-white/[0.3] text-[1rem] text-white  px-4 py-2 focus:outline-none focus:bg-black/[0.2] capitalize "
        />
        <button
          onClick={navigateToProfile}
          className="      
          text-[#3A3333] w-2/4
          bg-gradient-to-b from-white to-white/[0.2]
          py-2 px-4 rounded-md font-medium"
        >
          Go To Profile
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
