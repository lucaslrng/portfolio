import { Container, Row, Tab, Col } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp1 from "../assets/img/color-sharp.png";
import projImg1 from "../assets/img/imgmeetic.png";
import projImg2 from "../assets/img/puis.png";
import projImg3 from "../assets/img/irc2.png";


export const MyProjetcs = () => {

    const projects1 = [
        {
            title: "MyMeetic",
            description: "Réalisation d'un site web avec les mêmes fonctionnalités que la plateforme meetic.fr. Languages : PHP, JQuery, Ajax",
            imgUrl: projImg1,
        },
        {
            title: "Puissance 4",
            description: "Réalisation d'un jeu Puissance 4 modulable. Languages : JS, HTML, CSS",
            imgUrl: projImg2,
        },
        {
            title: "My_IRC",
            description: "Réalisation d'un chat en ligne avec création de salons. Languages : JS, HTML, CSS",
            imgUrl: projImg3,
        },
    ]

    return (
        <section className="project" id="projets">
            <Container>
                <Row>
                    <Col>
            <img className="background-image-right" src={colorSharp2}></img>
            <img className="background-image-left" src={colorSharp1}></img>
                        <h2>Projets</h2>
                        <p>Voici quelques projets réalisés lors de ma formation à Epitech</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}