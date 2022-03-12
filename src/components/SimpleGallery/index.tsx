import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';

export interface ISimpleGalleryProps {
  readonly pictures?: Array<string>;
  readonly links?: Array<string | To>;
}

const SimpleGallery: React.FC<ISimpleGalleryProps> = ({ pictures, links }) => {
  const navi = useNavigate();
  return (
    <Container>
      {links && links.length > 0 && (
        <Button onClick={() => navi(links[0], { replace: true })} />
      )}
      <Row>
        <Col md={3} style={{}}>
          <Card className="bg-dark text-white">
            <Card.Img src={pictures && pictures[0]} alt="Card image" />

            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img src={pictures && pictures[1]} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleGallery;
