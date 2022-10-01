import userImage from "../../../assets/images/user.png";
import styles from "./Contact.module.css";

const Contact = ({ onDelete, contact }) => {
  const { id, name, email } = contact;

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
};

export default Contact;
