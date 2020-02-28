import React, { useState } from "react";

export default function SearchForm({ setQuery, setQueryType }) {
  const [currentSearch, setCurrentSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(currentSearch);
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="query-type">
          Search By:
          <select name="query-type" id="query-type" onChange={e => setQueryType(e.target.selectedOptions[0].value)}>
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="species">Species</option>
            <option value="type">Type</option>
            <option value="gender">Gender</option>
          </select>
        </label>
        <input type="text" onChange={e => setCurrentSearch(e.target.value.toLowerCase())} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
