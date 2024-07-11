function Head0(){
    const UrlHead = "../assets/logoIfusp.png";

    return (
        <div>
            <div className="cabecalho">
                <header>
                    <div className="container">
                        <div className="apresentacao">
                            <div className="logo">
                                <img style={{width: '50px'}} src={UrlHead}/>
                            </div>
                            <div className="name-university">
                                <h2>Kaique Albuquerque</h2>
                                <p>Instituto de física da USP</p>
                            </div>
                        </div>
                
                
                        <div className="botoes-pagina">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <button onClick={() => scrollToSection('about')} type="button" className="btn btn-outline">Sobre mim</button>
                                <button onClick={() => scrollToSection('research')} type="button" className="btn btn-outline">Pesquisa</button>
                                <button onClick={() => scrollToSection('publications')} type="button" className="btn btn-outline">Publicações</button>
                                <button onClick={() => scrollToSection('teach')} type="button" className="btn btn-outline">Ensino</button>
                                <button onClick={() => scrollToSection('contact')} type="button" className="btn btn-outline">Contato</button>
                            </div>
                        </div>
                
                    </div>
                </header>
            </div>
        </div>
    )
}
export default Head0;