import React, { useState, useEffect } from "react";
import { API_URL } from "~/config";
import { DecisionsStateData } from "~/store/decisions";

import GalleryImage from "~/components/GalleryImage/GalleryImage";
import {
  Container,
  Title,
  Body,
  DoIt,
  DontDoIt,
  SubTitle,
  List
} from "./styled-components";

type RequestedDecisionsStateData = Array<DecisionsStateData>;

const Gallery: React.FC = () => {
  const [doIt, setDoIt] = useState<RequestedDecisionsStateData>();
  const [dontDoIt, setDontDoIt] = useState<RequestedDecisionsStateData>();

  useEffect(() => {
    const requestAll = async () => {
      const response = await fetch(`${API_URL}/all`);
      const data: RequestedDecisionsStateData = await response.json();

      const doit: RequestedDecisionsStateData = data.filter(
        answer => answer.msg === "do it"
      );
      const dontdoit: RequestedDecisionsStateData = data.filter(
        answer => answer.msg === "don't do it"
      );

      setDoIt(doit);
      setDontDoIt(dontdoit);
    };
    requestAll();
  }, []);

  return (
    <Container className="gallery">
      <Title className="gallery__title">Gallery</Title>

      <Body className="gallery__body">
        <DoIt className="gallery__doIt">
          <SubTitle className="showcase__title">Do It</SubTitle>
          <List className="gallery__showcase">
            {doIt?.map((answer, index) => (
              <GalleryImage key={index} answer={answer} />
            ))}
          </List>
        </DoIt>
        <DontDoIt className="gallery__dontDoIt">
          <SubTitle className="showcase__title">Don't Do It</SubTitle>
          <List className="gallery__showcase">
            {dontDoIt?.map((answer, index) => (
              <GalleryImage key={index} answer={answer} />
            ))}
          </List>
        </DontDoIt>
      </Body>
    </Container>
  );
};

export default Gallery;
