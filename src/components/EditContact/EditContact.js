import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneContact } from "../../services/getOneContactService";
import { updateContact } from "../../services/updateContactService";
import styles from "../AddContact/AddContact.module.css";

const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchOneContact = async () => {
      try {
        const { data } = await getOneContact(params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    fetchOneContact();
  }, []);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.email === "") {
      alert("all fields are mandatory!");
      return;
    }

    try {
      await updateContact(params.id, contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
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
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContact;
