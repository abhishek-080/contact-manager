import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditContact = ({ updateContact }) => {
  // const name = updateContact.name;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(name);

  const update = (e) => {
    e.preventDefault();

    const { id, name, email } = location.state.contact;

    setName("");
    setEmail("");
    setId("");

    console.log(name, email, id);

    navigate("/showcon");
  };

  return (
    <div>
      <form className="p-2" onSubmit={update}>
        <h3>Edit User</h3>

        <div className="field ">
          <label className="">Phone no</label>
          <input
            type="number"
            className=""
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="field ">
          <label className="mt-3">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="ms-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field mt-2">
          <label className="me-1">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            className="ms-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-3 ">add</button>
      </form>
    </div>
  );
};

export default EditContact;
