import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import { getContacts } from "./services/getContactsService";
import { addContact } from "./services/addContactService";
import { deleteContact } from "./services/deleteContactService";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addContact(contact);
      setContacts([...contacts, data ]);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await getContacts();
        setContacts(data);
      } catch (error) {}
    };

    fetchContacts();
  }, []);

  return (
    <main className="App">
      <h1>Contact App</h1>
      <Routes>
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;
