import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import nameLogo from "../img/bdb8e43203e8637f65bf57d9e1eb8579_1499x624_0x0_1499x750_crop.png";
import orangeColorLogo from "../img/output-onlinepngtools.png";
import "../css/MyContainer.css";

export default class App extends Component {
  handleNavClick = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const sectionId = event.currentTarget.getAttribute("href").substring(1); // Получаем id секции
    const section = document.getElementById(sectionId); // Находим элемент по id
    section && section.scrollIntoView({ behavior: "smooth" }); // Прокручиваем до секции, если элемент найден
  };
  render() {
    return (
      <div style={{ margin: "125px" }}>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container className="header-container">
            <Navbar.Brand href="/">
              <img
                src={orangeColorLogo}
                height="100px"
                width="100px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <a
                  className="nav-link"
                  href="#home-form-section"
                  onClick={this.handleNavClick}
                >
                  Home
                </a>
                <a
                  className="nav-link"
                  href="#about-form-section"
                  onClick={this.handleNavClick}
                >
                  About us
                </a>
                <a
                  className="nav-link"
                  href="#contact-team-section"
                  onClick={this.handleNavClick}
                >
                  Team
                </a>
                <a
                  className="nav-link"
                  href="#contact-form-section"
                  onClick={this.handleNavClick}
                >
                  Contacts
                </a>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/" className="logo-name">
              <img
                src={nameLogo}
                height="100px"
                width="230px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
