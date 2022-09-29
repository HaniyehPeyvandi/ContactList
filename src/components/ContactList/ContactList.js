import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id}>
            <p>name : {name}</p>
            <p>email : {email}</p>
            <button onClick={() => onDelete(id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
