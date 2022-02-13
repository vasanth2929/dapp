import React, { useState } from "react";
import { useMoralis } from "react-moralis";

export const Profile = () => {
  const { user, setUserData } = useMoralis();
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setUserData({ username: name });
    } catch (error) {}
  };
  return (
    <div>
      <p>Username : {user.getUsername()}</p>
      <p className="text-ellipsis overflow-hidden">
        Address: {user.get("ethAddress")}
      </p>
      {/* <form onSubmit={handleSubmit}>
        <label>Change Username</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none border-2 border-purple-400 block p-2 rounded-md mt-2"
        />
        <button className="mt-2">Change</button>
      </form> */}
    </div>
  );
};
