import { Card, Container, Col, Row, Image, Button} from "react-bootstrap"; 
import antmanImg from "../assets/images/superhero/antman.jpg";
import avengerImg from "../assets/images/superhero/avenger.jpg";
import batmanImg from "../assets/images/superhero/batman.jpg";
import robinhoodImg from "../assets/images/superhero/robinhood.jpg";
import spidermanImg from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImg from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
                <br />
               <Row>
                <Col md={4} className="movieWrapper" id="superhero">
                <Card className="movieImg">
                <Image src={antmanImg} alt="Ant-Man Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">ANT-MAN MOVIES</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/pWdKf3MneyI?si=R5tVVUxDCg3_h-y9">Tonton Sekarang!</Button>
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={avengerImg} alt="AVENGERS" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">AVENGERS END GAME</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                  <Button variant="danger" href="https://youtu.be/0jNvJU52LvU?si=CZtIvDbNDLI2hfHS">Tonton Sekarang!</Button>
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={batmanImg} alt="Batman Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">THE DARK KNIGHT</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                  <Button variant="danger" href="https://youtu.be/dUMUH4NNYDY?si=bTfzlUBEIk-9a6xo">Tonton Sekarang!</Button>
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={robinhoodImg} alt="Robinhood Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/Ye4Rw5fKCyQ?si=fayRsQ4vr23tInwl">Tonton Sekarang!</Button>
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={spidermanImg} alt="SPIDERMAN MOVIES" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SPIDERMAN MOVIES</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/Wtj04Oq_1Nc?si=VxlTp0e_6-Y2rVpw">Tonton Sekarang!</Button>
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={supermanImg} alt="Superman Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SUPERMAN M-O-S</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/lXSDzzUUGqc?si=UtZiJSLyQ6PNVrGu">Tonton Sekarang!</Button>
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                </Row> 
            </Container>
        </div>
    )
}

export default SuperHero;