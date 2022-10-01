import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div>
      <p>user name : {contact.name}</p>
      <p>email : {contact.email}</p>
      <Link to="/">go to homepage</Link>
    </div>
  );
};

export default ContactDetail;
