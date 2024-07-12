//import { useState } from 'react'

//Fontes de estilo próprias
import './index.css'

//Fontes de estilo externas
import 'bootstrap/dist/css/bootstrap.min.css';


//Componentes internas
import Head0 from './Head0'
import Footer0 from './Footer0'
import AboutMe from './AboutMe'
import ContentListing from './ContentListing'
import Contato0 from './Contato0';

function App() {

  var txt_abt_me = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.Lorem ipsum dolor sit amet,'

  var items = [
    { title: 'Item 1', comment: 'Este é o comentário do item 1', link: 'https://example.com' },
    { title: 'Item 2', comment: 'Este é o comentário do item 2' },
    { title: 'Item 3', comment: 'Este é o comentário do item 3', link: 'https://example.com/3' },
  ];

  var pubs = [
    { title: 'Item 1', comment: 'Este é o comentário do item 1', link: 'https://example.com' },
    { title: 'Item 2', comment: 'Este é o comentário do item 2' },
    { title: 'Item 3', comment: 'Este é o comentário do item 3', link: 'https://example.com/3' },
  ]

  return (
    <div>
        <Head0 />

        <AboutMe secName={'sobreMim'} titulo={'Sobre mim'} img_size={'250px'} UrlImg={'./src/assets/perfil.png'} img_class={'float-image-left'} texto={txt_abt_me} display_subcontent={'d-flex flex-column'} subtitle={'Redes sociais'}/>

        <ContentListing secName={'pesquisa'} titulo='Pesquisa' img_size={'250px'} UrlImg="./src/assets/pesquisa.jpg" img_class={'float-image-right'} texto={txt_abt_me}  subtitle={'Tópicos de interesse'} itens={items}/>

        <ContentListing secName={'pesquisa'} titulo='Publicacões' img_size={'250px'} UrlImg="./src/assets/publicacoes.png" img_class={'float-image-left'} texto={txt_abt_me}  subtitle={'Publicações de destaque'} itens={items}/>

        <ContentListing secName={'pesquisa'} titulo='Publicacões' img_size={'250px'} UrlImg="./src/assets/publicacoes.png" img_class={'float-image-left'} texto={txt_abt_me}  subtitle={'Publicações de destaque'} itens={items}/>

        <ContentListing secName={'pesquisa'} titulo='Ensino' img_size={'250px'} UrlImg="./src/assets/ensino.jpg" img_class={'float-image-right'} texto={txt_abt_me}  subtitle={'Matérias lecionadas'} itens={items}/>

        <Contato0  id ="contact" alt="" titulo="Contact"/>

        <Footer0 />
      
    </div>
  )
}

export default App
