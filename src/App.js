import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };

  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}/>
    </main>
  );
}

export default App;
