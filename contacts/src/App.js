import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactShow from "./components/ContactShow";
import Top from "./components/Top";
// import { uuid } from "uuidv4";
// import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "./components/Home.js";
import ContactDetails from "./components/ContactDetails";
import api from "./api/contacts";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const Local_storage_key = "contacts";

  const addContact = async (contact) => {
    // setContacts([...contacts, { id:uuid(), ...contact}]);
    console.log(contact);


    const request = {
      ...contact,
    };
    const response = await api.post("/contacts", request);
    console.log(response);

    // for localstorage
    // setContacts([...contacts, contact]);

    // set state for api
    setContacts([...contacts, response.data]);
  };



  const updateContact = async (contact) => {

  };

  const removeContHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  // Retrove contacts from api
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    // Retrieve contacts from local storage
    // const retriveCont = JSON.parse(localStorage.getItem(Local_storage_key));

    // if (retriveCont) {
    //   setContacts(retriveCont);
    // }

    const getContactsap = async () => {
      const allContacts = await retriveContacts();

      if (allContacts) {
        setContacts(allContacts);
      }
    };

    getContactsap();
  }, []);

  useEffect(() => {
    // localStorage.setItem(Local_storage_key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className=" p-4 text-center">
      <BrowserRouter>
        <Top />

        <div className="d-flex flex-nowrap gap-3 m-2 mb-5 justify-content-center mt-4">
          <Link to="/addcont">
            <div> Add Contact </div>
          </Link>
          <Link to="/showcon">
            <div> All Contact </div>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/contactdetails/:id" element={<ContactDetails />} />

          <Route
            path="/addcont"
            element={
              <ContactForm addContact={addContact} />
            }
          />
          <Route
            path="/showcon"
            element={
              <ContactShow
                contacts={contacts}
                getContactId={removeContHandler}
              />
            }
          />

          <Route
            path="/edit"
            element={
              <EditContact getContactId={updateContact} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
