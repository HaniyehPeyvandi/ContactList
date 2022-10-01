import { Link } from "react-router-dom";
import styles from "./ContactList.module.css";
import userImage from "../../assets/images/user.png";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.contactList}>
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className={styles.item}>
            <div className={styles.userInfo}>
              <img src={userImage} alt="userImage" />
              <div>
                <p>name : {name}</p>
                <p>email : {email}</p>
              </div>
            </div>
            <button onClick={() => onDelete(id)}>delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
