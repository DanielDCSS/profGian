/*
Esse content trata-se de uma estrutura destinada a algum item que irá apresentar subintens.
O conteudo principal é acompanhado de uma imagem e um texto, já o subconteudo é uma listagem dinâmica de itens.
*/

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import './ContentListing.css';

function ContentListing({secName, titulo, img_size, UrlImg, img_class, texto, subtitle, itens = []}){
    
    return (
        <section id={secName}>
            <div className={secName}>
                <div className="titleSection">
                    <FontAwesomeIcon icon={faArrowRight} />
                    <h2>{titulo}</h2>
                </div>
                <div className="image-text-conteiner">
                    <img style={{width : img_size}} src={UrlImg} alt="imagem" className={img_class}/>
                    <div dangerouslySetInnerHTML={{ __html : texto}} />
                </div>
                <div className="subtitleSection">
                    <FontAwesomeIcon icon={faArrowRight} /><h5>{subtitle}</h5>
                </div>
                <div className="item-list">
                    {itens.map((itens, index) => (
                        <div key={index} className="item">
                            <p className="item-title">
                                <strong>{itens.title}</strong>: {itens.comment}
                            </p>
                            {itens.link && (
                                <p className="item-link">
                                &rarr; <a href={itens.link} target="_blank" rel="noopener noreferrer">{itens.link}</a>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default ContentListing