import { Link, useLocation } from "react-router-dom";
import styles from './ContactDetail.module.css';

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div className={styles.contactDetail}>
      <p>user name : {contact.name}</p>
      <p>email : {contact.email}</p>
      <Link to="/" className={styles.link}>Go to contact list</Link>
    </div>
  );
};

export default ContactDetail;
