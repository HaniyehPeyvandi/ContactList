import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddContact.module.css";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.email === "") {
      alert("all fields are mandetory!");
      return;
    }

    addContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
