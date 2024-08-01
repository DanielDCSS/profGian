/*
Esse content trata-se de uma estrutura simples de uma apresentação pessoal.
O conteudo principal é acompanhado de uma imagem e um texto, já o subconteudo contem as redes sociais.
*/
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight ,faBook} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons'
import './AboutMe.css'


function AboutMe({secName, titulo, img_size, UrlImg, img_class, texto, display_subcontent, subtitle}){

    
    return (
        <>
            <section id={secName}>
                <div className={secName}>
                    <div className="titleSection">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <h2>{titulo}</h2>
                    </div>
                    <div className="image-text-conteiner">
                        <img style={{width : img_size}} src={UrlImg} alt="imagem" className={img_class}/>
                        <p>{texto}</p>
                    </div>
                    <div className={display_subcontent}>
                        <div className="subtitleSection">
                            <FontAwesomeIcon icon={faArrowRight} /><h5>{subtitle}</h5>
                        </div>
                        <div className="social_medias">
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faBook} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

AboutMe.defaultProps = {
    secName: 'conteudo',
    titulo: 'About_me',
    title_icon: "fa-solid fa-check",
    img_size: 'auto',
    UrlImg: 'https://images.app.goo.gl/SLJGZ8u1kJZSAsPr6',
    img_class: '',
    texto: 'Aqui vem o texto',
    display_subcontent: 'd-none',
    subtitle_icon: 'fa-solid fa-check',
    subtitle: 'Subtitulo do conteudo',
    subcontent_class: '',
    subcontent: 'Aqui o subcontent'
}


export default AboutMe ; 
