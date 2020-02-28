import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState({ results: [] });

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(res => setCharacterData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      <Container>
        <Row>
          {characterData.results.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
