import css from './ContactList.module.css'
import PropTypes from 'prop-types';

export default function ContactList({contact, ondeleteContact}) {
    return (
    <ul className={css.contactlist}>
        {contact.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
        onClick={() => ondeleteContact(id)}
          className={css.btn}
          type="button"
        >
         СТЕРЕТЬ НАХЕР
        </button>
      </li>
    ))}
    </ul>
    )
}


ContactList.propTypes = {
  ondeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,

    })
  )
}