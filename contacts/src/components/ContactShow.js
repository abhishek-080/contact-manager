import React from "react";
import ContactCard from "./ContactCard";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ContactForm from "./ContactForm";


const ContactShow = (props) => {

  const delContHandler =(id)=>{
    props.getContactId(id);
  }



  const renderContacts = props.contacts.map((contact,index) => {
    return (    
      <div className="items d-flex justify-content-center" key={index}>
        {/* <div className="contents d-flex flex-wrap gap-4">
          <div> {contact.id} .</div>
          <div> {contact.name} </div>
          <div> {contact.email} </div>

        </div> */}

        <ContactCard contacts={contact} clickHandler={delContHandler} key={contact.id} />
      </div>
    );
  });

  return (
    <div className="mt-3">
      <h4>

      All Contacts
      </h4>
       
        <Link to="/addcont"><div>  <button className="btn btn-primary btn-sm"> back to Contacts</button> </div> </Link>

      <div className="mt-3">
    
      {renderContacts}
      </div>
    </div>
  );
};

export default ContactShow;
