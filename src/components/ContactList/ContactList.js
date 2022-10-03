import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { getContacts } from "../../services/getContactsService";
import { deleteContact } from "../../services/deleteContactService";

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await getContacts();
        setContacts(data);
        setAllContacts(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchContacts();
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      setAllContacts(filteredContacts);
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    let search = e.target.value;
    if (!search || search === "") {
      setContacts(allContacts);
    } else {
      const filtered = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filtered);
    }
  };

  const renderContactList = () => {
    if (loading) {
      return <p className={styles.message}>Loading...</p>;
    } else if (error) {
      return <p className={styles.message}>Fetching data failed...</p>;
    } else if (allContacts.length === 0) {
      return <p className={styles.message}>Add some contacts !</p>;
    } else if (contacts.length === 0) {
      return <p className={styles.message}>No item matches !</p>;
    } else {
      return contacts.map((contact) => (
        <Contact
          onDelete={deleteContactHandler}
          contact={contact}
          key={contact.id}
        />
      ));
    }
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
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={searchHandler}
            className={styles.searchBox}
          />
        </div>
        {renderContactList()}
      </div>
    </section>
  );
};

export default ContactList;
