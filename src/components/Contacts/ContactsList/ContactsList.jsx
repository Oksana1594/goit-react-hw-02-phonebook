// import ContactsItem from '../ContactsItem/ContactsItem';
import styles from './contacts-list.module.css'
import PropTypes from "prop-types";

const ContactsList = ({contacts}) => {
   
    return (
     
            <ul className={styles.list}>
            {contacts.map((contact) => (<li key={contact.id}><p>{contact.name}: { contact.number}</p></li>)) }
            </ul>
       
    )
}

ContactsList.defaultProps = {
    contacts: []
}

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    })).isRequired,
}