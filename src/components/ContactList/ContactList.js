import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <p>name : {contact.name}</p>
            <p>email : {contact.email}</p>
            <button>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
