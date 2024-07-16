
/* Como a parte de contato vai ser rutilzada bastante, vou criar o componente contato */

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight ,faBook} from '@fortawesome/free-solid-svg-icons'
/*import { faFacebook, faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons' */


function Contato0({secName, titulo, endereço, email, linkedln, telefone , display_subcontent, subtitle}){

    const ref = "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHmWjNFXNvhcwAAAZCkb57o-CaPV-Y4bUFlcaAME_51VHyp4THF2iGWZNWCqsOdD-MEXCf1nLVPCcxHsMqKav1DSXV5_77275sbKAb8yZOn5tkqD8_UppAlnULYpXMKoOgHiQo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcaiocesar-aguiar%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app";
    
    return (
        <section id={secName}>
            <div className={secName}>
                <div className="texto_contato">
                    <div className="titleSection">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <h2>{titulo}</h2>
                    </div>
                    <p>{endereço} Para entrar em contato use as formas abaixo.</p>
                    <p><FontAwesomeIcon icon={faArrowRight} color={'#54b8b1'}/>   Email :   {email}</p>
                    <p><FontAwesomeIcon icon={faArrowRight} color={'#54b8b1'}/>   Linkedln :  <a href={ref}>{linkedln}</a></p>
                    <p><FontAwesomeIcon icon={faArrowRight} color={'#54b8b1'}/>   Ramal :  {telefone}</p>
                </div>   
            </div>
        </section>
    )
}
Contato0.defaultProps = {
    secName: 'conteudo',
    titulo: 'Contato',
    title_icon: "fa-solid fa-check",
    img_size: 'auto',
    endereço: 'Universidade de São Paulo, Instituto de Física, Departamento de Física Aplicada, Edifício Basílio Jafet, rua do Matão, Cidade Universitária, 05508-900 - São Paulo, SP - Brasil - Caixa-postal: 66318',
    email: 'tamplate@gmail.com',
    linkedln: 'MeuIdNoLinkedln',
    telefone:'(11) 30917110',
    display_subcontent: 'd-none',
    subtitle_icon: 'fa-solid fa-check',
    subtitle: 'Subtitulo do conteudo',
    subcontent_class: '',
    subcontent: 'Aqui o subcontent'
}


export default Contato0 ; 

