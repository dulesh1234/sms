import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)
  const handleSubmit = () => {
    e.preventDefault()
    setUser({username, password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username" value={username} onClick={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder="password" value={password} onClick={(e)=>setUsername(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Profile;
