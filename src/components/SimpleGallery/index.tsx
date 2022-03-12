import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';
import PersonCard from '../PersonCard';
import { ISuspect } from '../../utils/types';

export interface ISimpleGalleryProps {
  readonly pictures?: Array<string>;
  readonly links?: Array<string | To>;
  readonly participants?: Array<ISuspect>;
}

const SimpleGallery: React.FC<ISimpleGalleryProps> = ({
  participants,
  pictures,
  links
}) => {
  const navi = useNavigate();
  return (
    <Container>
      {/*{links && links.length > 0 && (*/}
      {/*  <Button onClick={() => navi(links[0], { replace: true })} />*/}
      {/*)}*/}
    </Container>
  );
};

export default SimpleGallery;
