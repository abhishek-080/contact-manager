import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ContactDetails = (props) => {
  const location = useLocation();

  const { id, name, email } = location.state.contact;

  return (
    <div>
      <div className="items d-flex flex-nowrap justify-content-center mb-3 ps-4">
        <div className="contents d-flex flex-wrap gap-4">
          <div>{id}</div>
          <div> {name} </div>
          <div> {email} </div>
        </div>
      </div>
      <Link to={"/Showcon"}>
        <button className="btn btn-sm btn-primary "> back to contacts</button>
      </Link>
    </div>
  );
};

export default ContactDetails;
