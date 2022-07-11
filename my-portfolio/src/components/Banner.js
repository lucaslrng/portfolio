import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import Typewriter from 'react-ts-typewriter';
import CV from '../assets/doc/CV.pdf';
import photo from '../assets/img/profil.jpeg';


export const MyBanner = () => {

  return (
    <section className="banner" id="accueil">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <img src={photo} id="profil" />
            <span className="tagline">Bienvenue sur mon Portfolio</span>
            <h1><span className="wrap">
              <Typewriter
              text="Bonjour, je m'appelle Lucas !"
              speed='20'
              random={0}
              />
            </span></h1>
            <p>Je suis un jeune développeur web en formation à la Webacadémie d'Epitech à Nancy passionné par la musiques, les jeux vidéos &amp; les nouvelles technologies. Dans le cadre de mes études, et afin d'approfondir mes connaissances je recherche une alternance du 12 septembre 2022 au 20 octobre 2023.</p>
            <a id="cv" href={CV} download>Télécharger mon CV</a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img id="imgban" src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
