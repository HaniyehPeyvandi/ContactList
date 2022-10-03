import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundBox}>
      <p>404</p>
      <p>Page not found !</p>
      <Link to="/" className={styles.link}>
        Go to contact list
      </Link>
    </div>
  );
};

export default NotFound;
