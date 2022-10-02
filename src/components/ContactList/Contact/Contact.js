import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.png";
import styles from "./Contact.module.css";

const Contact = ({ onDelete, contact }) => {
  const { id, name, email } = contact;

  return (
    <div className={styles.item}>
      <div className={styles.userInfo}>
        <img src={userImage} alt="userImage" />
        <Link
          to={`/user/${id}`}
          state={{ contact: contact }}
          className={styles.link}
        >
          <div>
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className={styles.editBtn}>Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
