import React, { Component } from "react";
import { Tab, Container, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container id="about-form-section" style={{ paddingTop: "150px" }}>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Designe</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworke</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Librates</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* <img
                    src="https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1714089600&semt=ais"
                    alt="..."
                  /> */}
                  <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa velit sint vitae nisi nihil quisquam expedita culpa? Voluptate non laudantium inventore illum, animi explicabo voluptates totam deserunt consequatur tempore!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis qui quo, illo placeat modi?</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda laudantium, dolore voluptas aut sunt harum fugiat
                    deleniti libero ullam doloribus error quasi quidem
                    accusamus. Nihil et saepe corrupti officiis dicta.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {/* <img
                    src="https://i.pinimg.com/236x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
                    alt="..."
                  /> */}
                    <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa velit sint vitae nisi nihil quisquam expedita culpa? Voluptate non laudantium inventore illum, animi explicabo voluptates totam deserunt consequatur tempore!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis qui quo, illo placeat modi?</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda laudantium, dolore voluptas aut sunt harum fugiat
                    deleniti libero ullam doloribus error quasi quidem
                    accusamus. Nihil et saepe corrupti officiis dicta.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {/* <img
                    src="https://i.pinimg.com/236x/24/15/21/24152197af38deb718eb730992d441d0.jpg"
                    alt="..."
                  /> */}
                    <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa velit sint vitae nisi nihil quisquam expedita culpa? Voluptate non laudantium inventore illum, animi explicabo voluptates totam deserunt consequatur tempore!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis qui quo, illo placeat modi?</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda laudantium, dolore voluptas aut sunt harum fugiat
                    deleniti libero ullam doloribus error quasi quidem
                    accusamus. Nihil et saepe corrupti officiis dicta.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  {/* <img
                    src="https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg"
                    alt="..."
                  /> */}
                    <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa velit sint vitae nisi nihil quisquam expedita culpa? Voluptate non laudantium inventore illum, animi explicabo voluptates totam deserunt consequatur tempore!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis qui quo, illo placeat modi?</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda laudantium, dolore voluptas aut sunt harum fugiat
                    deleniti libero ullam doloribus error quasi quidem
                    accusamus. Nihil et saepe corrupti officiis dicta.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  {/* <img
                    src="https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg"
                    alt="..."
                  /> */}
                    <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa velit sint vitae nisi nihil quisquam expedita culpa? Voluptate non laudantium inventore illum, animi explicabo voluptates totam deserunt consequatur tempore!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis qui quo, illo placeat modi?</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda laudantium, dolore voluptas aut sunt harum fugiat
                    deleniti libero ullam doloribus error quasi quidem
                    accusamus. Nihil et saepe corrupti officiis dicta.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
