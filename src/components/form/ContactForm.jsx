// import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import backgroundImg from "../../img/3da57b1efacb59b9a5275875e39f0467_fit.jpg";
import "../../css/Header.css";

function ContactForm() {
  return (
    <div
      id="contact-form-section"
      style={{
        // width: "500px"
        paddingTop: "150px",
        backgroundImage: `url(${backgroundImg})`, // Предполагая, что изображение находится в public/img
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
          minHeight: "100vh",
        }}
      >
        <div className="w-50 text-center">
          <h1 className="text-center">Contact us</h1>
          <Form className="container-form">
            <Form.Group style={{ margin: "10px" }} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email"></Form.Control>
              <Form.Text>It is so good</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Exempl textaria</Form.Label>
              <Form.Control as="textarea"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button vcariant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
