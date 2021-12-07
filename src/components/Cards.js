import React from "react";
import { Card, CardGroup, Badge, Image, InputGroup, FormControl, Button } from "react-bootstrap";

const Cards = () => {
  return (
    <div className="mt-4 mx-5 py-2 px-3">
      <CardGroup>
        <Card className="me-3 p-2" style={{ width: "20rem" }}>
          <Card.Body>
            <div v className="d-flex justify-content-between">
              <h6>
                <Badge bg="secondary">NEW</Badge>
              </h6>
              <h6>
                <Image className="me-4" width="25" src="menu.png"></Image>
                <Image className="" width="30" src="heart.png"></Image>
              </h6>
            </div>
            <Image className="" width="350" src="1.png"></Image>
            <Card.Title className="text-center">Wooden Chair</Card.Title>
            <div className="d-flex justify-content-between">
              <Image className="mt-4 me-4" style={{ width: "35%", height: "35%" }} src="star.png"></Image>
              <InputGroup className="mt-4">
                <FormControl value="Rp 12.000" style={{ backgroundColor: "white" }} disabled />
                <Button variant="outline-secondary">
                  <Image width="30" src="cart.png"></Image>
                </Button>
              </InputGroup>
            </div>
          </Card.Body>
        </Card>

        <Card className="me-3 p-2" style={{ width: "20rem" }}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h6>
                <Badge bg="secondary">NEW</Badge>
              </h6>
              <h6>
                <Image className="me-4" width="25" src="menu.png"></Image>
                <Image className="" width="30" src="heart.png"></Image>
              </h6>
            </div>
            <Image className="" width="350" src="2.png"></Image>
            <Card.Title className="text-center">Wooden Chair</Card.Title>
            <div className="d-flex justify-content-between">
              <Image className="mt-4 me-4" style={{ width: "35%", height: "35%" }} src="star.png"></Image>
              <InputGroup className="mt-4">
                <FormControl value="Rp 12.000" style={{ backgroundColor: "white" }} disabled />
                <Button variant="outline-secondary" id="button-addon2">
                  <Image width="30" src="cart.png"></Image>
                </Button>
              </InputGroup>
            </div>
          </Card.Body>
        </Card>
        <Card className="me-3 p-2" style={{ width: "20rem" }}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h6>
                <Badge bg="secondary">NEW</Badge>
              </h6>
              <h6>
                <Image className="me-4" width="25" src="menu.png"></Image>
                <Image className="" width="30" src="heart.png"></Image>
              </h6>
            </div>
            <Image className="" width="350" src="3.png"></Image>
            <Card.Title className="text-center">Wooden Chair</Card.Title>
            <div className="d-flex justify-content-between">
              <Image className="mt-4 me-4" style={{ width: "35%", height: "35%" }} src="star.png"></Image>
              <InputGroup className="mt-4">
                <FormControl value="Rp 12.000" style={{ backgroundColor: "white" }} disabled />
                <Button variant="outline-secondary" id="button-addon2">
                  <Image width="30" src="cart.png"></Image>
                </Button>
              </InputGroup>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cards;
