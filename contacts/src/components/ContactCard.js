import React from "react";
import { Link } from "react-router-dom";
import del from "./delete.png";
import edit from "./edit.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contacts;

  return (
    <div>
      <div className="items d-flex flex-nowrap ps-4">
        <Link
          to={{ pathname: `/contactdetails/${id}` }}
          state={{ contact: props.contacts }}
        >
          <div className="contents d-flex flex-wrap gap-4 text-dark">
            <div className=""> {id} </div>
            <div> {name} </div>
            <div> {email} </div>
          </div>
        </Link>

        <Link to={{ pathname: `/edit` }} state={{ contact: props.contacts }}>
          <div>
            <img
              className=" ms-4"
              style={{ height: "20px" }}
              src={edit}
              alt="edit"
            />
          </div>
        </Link>

        <div onClick={() => props.clickHandler(id)}>
          <img
            className=" ms-4"
            style={{ height: "20px" }}
            src={del}
            alt="del"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
