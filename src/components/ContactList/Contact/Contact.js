import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.png";
import styles from "./Contact.module.css";

const Contact = ({ onDelete, contact }) => {
  const { id, name, email } = contact;

  return (
    <div className={styles.item}>
      <div className={styles.userInfo}>
        <img src={userImage} alt="userImage" />
        <Link to={`/user/${id}`} state={{contact:contact}} className={styles.link}>
          <div>
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default Contact;
