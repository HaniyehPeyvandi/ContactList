import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <main className="App">
      <h1>Contact App</h1>
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
