import React, { useState } from "react";
import { CgPassword } from "react-icons/cg";

const FormValidation = () => {
  const initial = { name: "", email: "", passwords: "" };
  const [user, setUser] = useState(initial);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && passwords) {
      alert("successefully submit");
    } else {
      alert("fill all the fild");
    }
    setUser(initial);
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">Enter your name :-</label>
          <input
            type="text"
            placeholder="enter a name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="">Enter your name :-</label>
          <input
            type="text"
            placeholder="enter a email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="">Enter your name :-</label>
          <input
            type="text"
            placeholder="enter a password"
            name="passwords"
            value={user.passwords}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>sno.</th>
              <th>name</th>
              <th>email</th>
              <th>passwords</th>
              <th>delete</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>delete</button>
              </td>
              <td>
                <button>update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormValidation;
