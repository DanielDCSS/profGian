function Content0({UrlImg, id, alt, texto, titulo}){
    
    return (
        <section id={id}>
            <div className="container">
                <h2>{titulo}</h2>
                <img style={{width : 250}} src={UrlImg} alt={alt} className="profile-img"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor.{texto}</p>
            </div>
        </section>
    )
}
export default Content0 ; 