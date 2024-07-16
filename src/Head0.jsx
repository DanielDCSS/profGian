import React, { useEffect, useState } from 'react';
import './index.css';

function Head0() {
    const UrlHead = "./src/assets/logoIfusp.png";

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
        <div>
            <div className="cabecalho">
                <header className={`Header ${scrolled ? 'scrolled' : ''}`}>
                    <div className="container">
                        <div className="apresentacao">
                            <div className="logo">
                                <img style={{ width: '50px' }} src={UrlHead} alt="Logo" />
                            </div>
                            <div className="name-university">
                                <h2>Giancarlo Espósito</h2>
                                <p>Instituto de física da USP</p>
                            </div>
                        </div>

                        <div className="botoes-pagina">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <button onClick={() => scrollToSection('sobreMim')} type="button" className="btn btn-outline">Sobre mim</button>
                                <button onClick={() => scrollToSection('pesquisa')} type="button" className="btn btn-outline">Pesquisa</button>
                                <button onClick={() => scrollToSection('publicacões')} type="button" className="btn btn-outline">Publicações</button>
                                <button onClick={() => scrollToSection('ensino')} type="button" className="btn btn-outline">Ensino</button>
                                <button onClick={() => scrollToSection('contato')} type="button" className="btn btn-outline">Contato</button>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        </div>
    );
}

export default Head0;
