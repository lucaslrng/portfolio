import { useEffect, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/ic.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/gitv2.svg';


export const MyNavBar = () => {
    const [activeLink, setActiveLink] = useState('accueil');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#accueil">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#accueil" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('accueil')}>Accueil</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'competences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('competences')}>Compétences</Nav.Link>
                        <Nav.Link href="#projets" className={activeLink === 'projets' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projets')}>Projets</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Me contacter</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target="_blank" href='https://www.linkedin.com/in/loranglucas/'><img src={navIcon1} alt="social"/></a>
                            <a target="_blank" href='https://github.com/lucaslrng'><img src={navIcon2} alt="social" id="git"/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}