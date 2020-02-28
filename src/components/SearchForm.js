import React, { useState } from "react";

export default function SearchForm({ setQuery }) {
  const [currentSearch, setCurrentSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(currentSearch);
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setCurrentSearch(e.target.value.toLowerCase())} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
