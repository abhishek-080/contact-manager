import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ContactForm = ({addContact}) => {

  const [name, setName]= useState();
  const [email, setEmail]= useState();
  const [id, setId] = useState();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    addContact({
      name, email, id
  })
    
    setName("");
    setEmail("");
    setId("");
 
    
    console.log( name, email, id);


    navigate('/showcon')

    // console.log(addContact)

  };

  return (
    <div >
      <form  className="p-2"onSubmit={handleSubmit}>

        
      <div className="field ">
          <label className="">Phone no</label>
          <input
            type="number"
            className=""
            value={id}
            onChange={(e)=>setId(e.target.value)}
          />
        </div>

        <div className="field ">
          <label className="mt-3">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="ms-4"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="field mt-2">
          <label className="me-1">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            className="ms-4"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-3 ">add</button>

      </form>
    </div>
  );
};

export default ContactForm;
