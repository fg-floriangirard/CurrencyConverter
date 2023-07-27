// Import the PropTypes library for type-checking props
import PropTypes from 'prop-types';

import './Currencies.scss';

// Define the functional component 'Currencies' that takes 'currenciesList' as a prop
const Currencies = ({ currenciesList }) => (
  <div className="currencies">
    <h3 className="currencies-title">Currencies</h3>
    <ul>
      {/* Iterate over each item in 'currenciesList' and create an 'li' element */}
      {currenciesList.map((item) => (
        <li className="currency" key={item.name}>
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

// Define the prop types for 'currenciesList' prop
Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Currencies;
