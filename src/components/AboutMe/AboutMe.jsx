/*
Esse content trata-se de uma estrutura simples de uma apresentação pessoal.
O conteudo principal é acompanhado de uma imagem e um texto, já o subconteudo contem as redes sociais.
*/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './AboutMe.css'


function AboutMe({ secName, titulo, UrlImg, texto, display_subcontent }) {


    return (
        <>
            <section>
                <div className='sobre-mim'>
                    <div className="titleSection">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <h2>Trajetória acadêmica</h2>
                    </div>
                    <div className='abt-me-content'>
                        <div className="image-text-conteiner">
                            <img src={UrlImg} alt="imagem" className='imagem-abt-me' />
                            <p className="texto-abt-me">{texto}</p>
                        </div>
                        <div className={display_subcontent}>
                            <div className="subtitleSection">
                                <FontAwesomeIcon icon={faArrowRight} /><h5>Redes sociais</h5>
                            </div>
                            <div className="social_medias">
                                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faBook} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe; 
