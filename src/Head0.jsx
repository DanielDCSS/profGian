import React, { useEffect, useState } from 'react';
import './index.css';
import { Navbar, Nav, Button  } from 'react-bootstrap';

function Head0() {
    const UrlHead = "./src/assets/logoIfusp.png";

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Brand className='px-5' href="#home">
                        <div className="d-none d-md-inline-block">
                            <h2 className="name-university-title">Giancarlo Espósito</h2>
                            <p className="name-university-subtitle">Instituto de Física da USP</p>
                        </div>
                    </Navbar.Brand>
                    <Button className="navbar-toggler" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={() => scrollToSection('sobreMim')}>Sobre mim</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('pesquisa')}>Pesquisa</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('publicacoes')}>Publicações</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('ensino')}>Ensino</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('contato')}>Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Button className="close-btn" onClick={toggleSidebar}>×</Button>
                <Nav className="flex-column">
                    <Nav.Link onClick={() => scrollToSection('sobreMim')}>Sobre mim</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection('pesquisa')}>Pesquisa</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection('publicacoes')}>Publicações</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection('ensino')}>Ensino</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection('contato')}>Contato</Nav.Link>
                </Nav>
            </div>
        </>
    );
}

export default Head0;
