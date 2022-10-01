import { Link } from "react-router-dom";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.listWrapper}>
      <div className={styles.contactList}>
        <div className={styles.listHeader}>
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts.map((contact) => (
          <Contact onDelete={onDelete} contact={contact} key={contact.id} />
        ))}
      </div>
    </section>
  );
};

export default ContactList;
