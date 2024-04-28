import React, { Component } from "react";
import {
  Col,
  Container,
  ListGroup,
  Row,
  Card,
  CardBody,
} from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container id="blog-form-section" style={{ paddingTop: "150px" }}>
        <Row>
          <Col md="9" className="d-flex align-items-start flex-column">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript Logo"
                width={150}
                height={150}
                className="me-3 img-fluid" // Bootstrap 4 uses mr-3, for Bootstrap 5 use me-3
              />
              <div>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Eius
                  recusandae quos quae labore numquam adipisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste, blanditiis
                  architecto sequi sit, dignissimos unde cumque?
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript Logo"
                width={150}
                height={150}
                className="me-3 img-fluid" // Bootstrap 4 uses mr-3, for Bootstrap 5 use me-3
              />
              <div>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Eius
                  recusandae quos quae labore numquam adipisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste, blanditiis
                  architecto sequi sit, dignissimos unde cumque?
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categorii</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Eius
                  recusandae quos quae labo
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
