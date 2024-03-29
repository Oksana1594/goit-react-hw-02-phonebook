import styles from './field-filter.module.css'
import PropTypes from "prop-types";

const FieldToFilter = ({ value, onChange }) => {
    return (
        <label className={styles.label}>
            Find contacts by name
            <input className={styles.input} type="text" value={value} onChange={onChange } />
       </label>
    )
}

export default FieldToFilter;

FieldToFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};