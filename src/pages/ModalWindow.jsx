import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const LoginModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    price: "",
    time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Отправка формы на email с помощью EmailJS
      await emailjs.sendForm(
        "service_basd8no",
        "template_av0nnci",
        event.target,
        "Oyu9aEg1yLB7e0tj0"
      );
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.emailjs}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicSelectPrice">
            <Form.Label>Variant Price</Form.Label>
            <Form.Select
              aria-label="Choose an option"
              name="price"
              value={formData.price}
              onChange={handleChange}
            >
              <option>Price 1</option>
              <option>Price 2</option>
              <option>Price 3</option>
              <option>Price 4</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBasicSelectTime">
            <Form.Label>Variant Time</Form.Label>
            <Form.Select
              aria-label="Choose an option"
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option>Time 1</option>
              <option>Time 2</option>
              <option>Time 3</option>
              <option>Time 4</option>
            </Form.Select>
          </Form.Group>

          <Button className="m-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
