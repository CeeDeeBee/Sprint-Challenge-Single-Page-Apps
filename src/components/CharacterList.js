import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState({ results: [] });
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacterData(res.data)
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <SearchForm setQuery={setQuery} />
      <section className="character-list">
        <Container>
          <Row>
            {characterData.results.map(character => {
              {
                if (character.name.toLowerCase().includes(query)) {
                  return <CharacterCard key={character.id} character={character} />
                }
              }
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
