import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchGeo = ({ onSearchSubmit }) => {
  const [searched, setSearched] = useState('');

  const onSearchHandler = (event) => {
    setSearched(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searched.trim()) {
      onSearchSubmit(searched);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center mt-4">
      <input
        type="text"
        name="search"
        id="search"
        value={searched}
        placeholder="Enter city name"
        onChange={onSearchHandler}
        required
        className="border-2 rounded-xl border-black p-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">
        Get the Weather
      </button>
    </form>
  );
};

SearchGeo.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchGeo;
