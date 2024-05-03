import React, {useState } from "react";
import {
  CardGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import ModalForm from "./ModalWindow";
import "../css/Header.css";
import diagramFoto from "../img/Screenshot_diagram.png";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleButtonClick = (nameId) => () => {
    const section = document.getElementById(nameId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container
      fluid 
      id="home-form-section"
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(250,167,0,1) 100%)",
      }}
    >
      <Container
        
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          flexDirection: "column",
          maxWidth: "1220px", // Это ограничение применяется только к внутреннему контейнеру
          padding: "0",
          width: "100%" // Убедитесь, что этот контейнер растягивается на 100% ширины внешнего контейнера
        }}
      >
        <CardGroup>
          <Card
            className="mt-5 m-4 my-bg border border-warning card-custom"
            style={{ borderRadius: "25px" }}
          >
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ textAlign: "center" }}>
                Developers
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>punct 1</li>
                  <li>punct 1</li>
                  <li>punct 1</li>
                  <li>punct 1</li>
                </ul>
              </Card.Text>
              <div className="mt-auto d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={handleButtonClick("about-form-section")}
                >
                  About us
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="mt-5 m-4 my-bg border border-warning card-custom"
            style={{ minHeight: "300px", borderRadius: "25px" }}
          >
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ textAlign: "center" }}>
                Developers
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>punsdfwrwqerwervwvrewvwvrwevrct 1</li>
                  <li>punct 1</li>
                  <li>punct 1</li>
                  <li>punct 1</li>
                </ul>
              </Card.Text>
              <div className="mt-auto d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={handleButtonClick("about-price-section")}
                >
                  Price
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="mt-5 m-4 my-bg border border-warning card-custom"
            style={{ minHeight: "300px", borderRadius: "25px" }}
          >
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ textAlign: "center" }}>Diagram</Card.Title>
              <Card.Img
                src={diagramFoto}
                alt="diagram"
                style={{ width: "100%", height: "auto" }}
              />

              <div className="mt-auto d-flex justify-content-center">
                <Button variant="primary mt-3">About team</Button>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
        <Button
          className="m-5 button-animation btn-lg w-50"
          style={{ border: "solid 3px orange", color: "white" }}
          // variant="primary"
          variant="outline-primary"
          onClick={handleShow}
        >
          Contact
        </Button>
        <ModalForm show={show} handleClose={handleClose} />
      </Container>
    </Container>
  );
};

export default Home;
