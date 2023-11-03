import { Card, Container, Col, Row, Image, Button } from "react-bootstrap"; 
import duneImg from "../assets/images/trending/dune.jpg";
import everythingImg from "../assets/images/trending/everything.jpg";
import infiniteImg from "../assets/images/trending/infinite.jpg";
import jokerImg from "../assets/images/trending/joker.jpg";
import lightyearImg from "../assets/images/trending/lightyear.jpg";
import morbiusImg from "../assets/images/trending/morbius.jpg";

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">TRENDING MOVIES</h1>
                <br />
               <Row>
                <Col md={4} className="movieWrapper" id="trending">
                <Card className="movieImg">
                <Image src={duneImg} alt="Dune Movies" className="images" />
                  <div className="bg-dark d-flex flex-column justify-content-center align-items-center">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">DUNE</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center">
                    <Button variant="danger" href="https://youtu.be/6T0EpsVxYes?si=7RfPbEA31cf2tHU3">Tonton Sekarang!</Button>                  
                    </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={everythingImg} alt="EveryThing Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">EveryThing</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/lHEjfwqzYyA">Tonton Sekarang!</Button>                  
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={infiniteImg} alt="Infinite Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">INFINITE STORM</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/fBUx8a0rB5U?si=Gawri4rzKSwJ5EdY">Tonton Sekarang!</Button>                  
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={jokerImg} alt="Joker Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">JOKER'</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/A6bftX-IUOo?si=eE8lnZT9Ume8R_YT">Tonton Sekarang!</Button>                  
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={lightyearImg} alt="Lightyear 2022" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">LIGHTYEAR 2022</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                    <Button variant="danger" href="https://youtu.be/BwZs3H_UN3k?si=fNoegG4HnUoCO2yG">Tonton Sekarang!</Button>                  
                  </div>
                    </div>
                  </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImg">
                <Image src={morbiusImg} alt="Morbius Movies" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MORBIUS MOVIES</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    <div className="text-center ">
                <Button variant="danger" href="https://youtu.be/AVXLL01ggic?si=MUkKzw43Swn72rFt">Tonton Sekarang!</Button>
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

export default Trending