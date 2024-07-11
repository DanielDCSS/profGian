import { useState } from 'react'
import './index.css'
import Head0 from './Head0'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer0 from './Footer0'
import Content0 from './Content0'

function App() {
  var txt_abt_me = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.Lorem ipsum dolor sit amet,'

  return (
    <div>
        <Head0 />

        <Content0 secName={'sobreMim'} titulo={'Sobre mim'} img_size={'250px'} UrlImg={'./src/assets/perfil.png'} img_class={'float-image-left'} texto={txt_abt_me} display_subcontent={'d-flex flex-column'} subtitle={'Redes sociais'} subcontent_class={'social-medias'} subcontent={'F I L LAT'}/>


        <Content0 UrlImg="./src/assets/pesquisa.jpg" id ="research" alt="Research" titulo="Pesquisa"/>
        <Content0 UrlImg="./src/assets/publicacoes.png" id ="publications" alt="Publications" titulo="Publicações"/>
        <Content0 UrlImg="./src/assets/pesquisa.jpg" id ="teach" alt="Research" titulo="Ensino" />
        <Content0 UrlImg="" id ="contact" alt="" titulo="Contact"/>
        <Footer0 />
    
    </div>
  )
}

export default App
