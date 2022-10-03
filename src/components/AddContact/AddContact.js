import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../services/addContactService";
import styles from "./AddContact.module.css";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  let navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.email === "") {
      alert("all fields are mandetory!");
      return;
    }

    try {
      await addContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {
      alert("Something went wrong!");
    }
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
