import { Link } from "react-router-dom";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.contactList}>
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => <Contact onDelete={onDelete} contact={contact}/>)}
    </section>
  );
};

export default ContactList;
