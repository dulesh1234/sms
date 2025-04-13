import React, { useState } from "react";

import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (update !== null) {
      console.log(user);

      const updateData = data;
      updateData[update] = user;

      setData(updateData);
    } else {
      setData([...data, user]);
    }
    setUser({ email: "", password: "" });
    setUpdate(null);
  };

  const handleDelete = (idx) => {
    setData(data.filter((item, index) => index !== idx));
  };

  const handleUpdate = (idx, item) => {
    setUpdate(idx);
    setUser(item);
  };

  console.log(update);
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-[50%] p-10"
      >
        <div className="flex gap-5">
          <label htmlFor="">email</label>
          <input
            type="email"
            className="border rounded-lg "
            name="email"
            id=""
            value={user.email}
            placeholder="enter your email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex gap-5 relative">
          <label htmlFor="">password</label>
          <FaEyeSlash
            className="absolute top-1 left-62"
            onClick={() => setVisible(!visible)}
          />
          <input
            type={visible ? "text" : "password"}
            className="border rounded-lg "
            name="password"
            id=""
            value={user.password}
            placeholder="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="submit"
          value={update !== null ? "update" : "submit"}
          className="border bg-gray-50"
        />
      </form>
      {data.map((item, idx) => (
        <h1>
          {item.email}
          {item.password}{" "}
          <button
            onClick={() => handleDelete(idx)}
            className="border p-2 rounded bg-blue-300"
          >
            delete
          </button>{" "}
          <button
            onClick={() => handleUpdate(idx, item)}
            className="border p-2 rounded bg-blue-300"
          >
            update
          </button>
        </h1>
      ))}
    </div>
  );
};

export default Login;
