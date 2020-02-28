import React from "react";

export default function SearchForm({ setQuery }) {

  return (
    <section className="search-form">
      <input type="text" onChange={e => setQuery(e.target.value.toLowerCase())} />
    </section>
  );
}
