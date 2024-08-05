import React, {useState, useEffect} from 'react'; 

//Fontes de estilo próprias
import './home.css';

//Fontes de estilo externas
import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes internos
import AboutMe from '../../components/AboutMe/AboutMe'
import ContentListing from '../../components/ContentListing/ContentListing'
import Contato from '../../components/Contact/Contato'
import data from '../../data/Textos.json'


function Home() {

  const abm = data.txs[0].txt1
  const pesq = data.txs[1].txt2
  const publi = data.txs[2].txt3
  const ens = data.txs[3].txt4

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
        
        <main className='conteudo'>
          <AboutMe secName={'sobreMim'} titulo={'Sobre mim'} img_size={'250px'} UrlImg={'./assets/imagens/foto_prof.png'} img_class={'float-image-left'} texto={abm} display_subcontent={'d-flex flex-column'} subtitle={'Redes sociais'}/>

          <ContentListing secName={'pesquisa'} titulo='Pesquisa' img_size={'250px'} UrlImg="./assets/imagens/pesquisa.jpg" img_class={'float-image-right'} texto={pesq}  subtitle={'Tópicos de interesse'} itens={items}/>

          <ContentListing secName={'publicacões'} titulo='Publicacões' img_size={'250px'} UrlImg="./assets/imagens/publicacoes.png" img_class={'float-image-left'} texto={publi}  subtitle={'Publicações de destaque'} itens={items}/>


          <ContentListing secName={'ensino'} titulo='Ensino' img_size={'250px'} UrlImg="./assets/imagens/ensino.jpg" img_class={'float-image-right'} texto={ens}  subtitle={'Matérias lecionadas'} itens={items}/>

          <Contato secName={'contato'} id ="contact" alt="" titulo="Contato"/>
        </main>
        
    </div>
  )
}

export default Home;
