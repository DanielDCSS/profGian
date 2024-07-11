/*
Esse content trata-se de uma estrutura simples contendo conteudo principal e subconteudo.
O conteudo principal é acompanhado de uma imagem e um texto, já o subconteudo é opcional.
*/
function Content0({secName, title_icon, titulo, img_size, UrlImg, img_class, texto, display_subcontent, subtitle_icon, subtitle, subcontent_class, subcontent}){
    
    return (
        <section id={secName}>
            <div className={secName}>
                <div className="titleSection">
                    O
                    <h2>{titulo}</h2>
                </div>
                <div className="image-text-conteiner">
                    <img style={{width : img_size}} src={UrlImg} alt="imagem" className={img_class}/>
                    <p>{texto}</p>
                </div>
                <div className={display_subcontent}>
                    <div className="subtitleSection">
                        O<h5>{subtitle}</h5>
                    </div>
                    <div className={subcontent_class}>
                        {subcontent}
                    </div>
                </div>
            </div>
        </section>
    )
}

Content0.defaultProps = {
    secName: 'conteudo',
    titulo: 'Titulo do conteúdo',
    title_icon: "fa-solid fa-check",
    img_size: 'auto',
    UrlImg: 'https://images.app.goo.gl/SLJGZ8u1kJZSAsPr6',
    img_class: '',
    texto: 'O texto do conteudo vai aqui',
    display_subcontent: 'd-none',
    subtitle_icon: 'fa-solid fa-check',
    subtitle: 'Subtitulo do conteudo',
    subcontent_class: '',
    subcontent: 'Aqui o subcontent'
}


export default Content0 ; 