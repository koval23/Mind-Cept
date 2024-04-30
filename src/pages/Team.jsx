import React, { Component } from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container
          id="contact-team-section"
          style={{
            marginTop: "150px",
          }}
        >
          <h2 className="text-center m-4">Team</h2>
          <CardGroup className="m-4">
            <Card className="m-4" bg="warning">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1443245439/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B2%D1%83%D0%BC%D0%B5%D0%BD-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BE%D1%84%D0%B8%D1%81-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D0%BA%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%B0%D1%8F.jpg?s=612x612&w=0&k=20&c=64Kpcp68B4F2k0M3R8bgHQGSS_SevA0Ft1RmYj0RDKU="
                alt="img"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem kljlkj lkjlk w,mn qwewqe .,m, qwe/,/ qe,mcvd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card className="m-4" bg="warning">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem kljlkj lkjlk w,mn qwewqe .,m, qwe/,/ qe,mcvd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://media.istockphoto.com/id/1346944001/de/foto/nahaufnahme-von-kollegen-die-ihre-h%C3%A4nde-stapeln.jpg?s=612x612&w=0&k=20&c=nz6p6DhsiCWg5H8R7UlnGmAVxpFjNMCwfuqIRI6k0-o="
                alt="img"
              />
            </Card>
            <Card className="m-4" bg="warning">
              <Card.Img
                variant="top"
                src="https://thumbs.dreamstime.com/b/3d-small-people-team-23071405.jpg"
                alt="img"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem kljlkj lkjlk w,mn qwewqe .,m, qwe/,/ qe,mcvd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card className="m-4" bg="warning">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem kljlkj lkjlk w,mn qwewqe .,m, qwe/,/ qe,mcvd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://media.istockphoto.com/id/1346944001/de/foto/nahaufnahme-von-kollegen-die-ihre-h%C3%A4nde-stapeln.jpg?s=612x612&w=0&k=20&c=nz6p6DhsiCWg5H8R7UlnGmAVxpFjNMCwfuqIRI6k0-o="
                alt="img"
              />
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}
