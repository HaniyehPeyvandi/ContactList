import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { getContacts } from "../../services/getContactsService";
import { deleteContact } from "../../services/deleteContactService";

const ContactList = (props) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await getContacts();
        setContacts(data);
      } catch (error) {}
    };

    fetchContacts();
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  return (
    <section className={styles.listWrapper}>
      <div className={styles.contactList}>
        <div className={styles.listHeader}>
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts ? (
          contacts.map((contact) => (
            <Contact
              onDelete={deleteContactHandler}
              contact={contact}
              key={contact.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
