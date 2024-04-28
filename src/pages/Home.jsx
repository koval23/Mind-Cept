import React, { Component } from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";
import backgroundHeader from "../img/bgFirst.jpg";
import "../css/Header.css";

export default class Home extends Component {
  handleButtonClick = (nameId) => () => {
    const section = document.getElementById(nameId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  render() {
    return (
      <div
        id="home-form-section"
        style={{
          // width: "500px"
          marginTop: "120px",
          backgroundImage: `url(${backgroundHeader})`, // Предполагая, что изображение находится в public/img
          backgroundSize: "cover", // Покрыть всю область контейнера
          backgroundRepeat: "no-repeat", // Без повторения изображения
          backgroundPosition: "center",
        }}
      >
        <Container
          style={{
            display: "flex", // Добавляем Flexbox
            justifyContent: "center", // Горизонтальное выравнивание
            alignItems: "center", // Вертикальное выравнивание
            minHeight: "80vh",
            flexDirection: "column",
          }}
        >
          <CardGroup className="m-4">
            <Card className="m-4 my-bg" style={{ minHeight: "300px" }}>
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
                    onClick={this.handleButtonClick("about-form-section")}
                  >
                    About us
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-4 my-bg" style={{ minHeight: "300px" }}>
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
                    onClick={this.handleButtonClick("about-price-section")}
                  >
                    Price
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-4 my-bg" style={{ minHeight: "300px" }}>
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
                  <Button variant="primary">About team</Button>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
          <Button
            variant="primary"
            onClick={this.handleButtonClick("contact-form-section")}
          >
            Contact
          </Button>
        </Container>
      </div>
    );
  }
}
