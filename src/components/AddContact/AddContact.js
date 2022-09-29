import { useState } from "react";
import styles from "./AddContact.module.css";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({...contact,[e.target.name]:e.target.value});
  }

  return (
    <form>
      <div>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button>Add Contact</button>
    </form>
  );
};

export default AddContact;
