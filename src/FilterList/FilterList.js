
import css from './FilterList.module.css'
import PropTypes from 'prop-types';

export default function FilterList({filter, onFilterHandleChange }) {
    const onHandleChange = event => {
        onFilterHandleChange(event.target.value);
      };
    return(
        <label className={css.label}>
            Find contacts by name
            <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onHandleChange}
        name="filter"
      />
        </label>
    )
}



FilterList.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterHandleChange: PropTypes.func.isRequired

    }

