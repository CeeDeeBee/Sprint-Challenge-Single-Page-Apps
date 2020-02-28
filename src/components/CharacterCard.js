import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

export default function CharacterCard({ character }) {
  return (
    <Col lg="4">
      <div>
        <Card>
          <CardImg top width="100%" src={character.image} alt={`Image of ${character.name}`} />
          <CardBody>
            <CardTitle>{character.name}</CardTitle>
            <CardSubtitle>Location: {character.location.name}</CardSubtitle>
            <CardText>Status: {character.status}</CardText>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
}
