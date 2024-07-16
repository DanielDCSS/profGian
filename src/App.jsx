import React, {useState, useEffect} from 'react'; 

//Fontes de estilo próprias
import './index.css';

//Fontes de estilo externas
import 'bootstrap/dist/css/bootstrap.min.css';


//Componentes internas
import Head0 from './Head0'
import Footer0 from './Footer0'
import AboutMe from './AboutMe'
import ContentListing from './ContentListing'
import Contato0 from './Contato0'
import data from './Textos.json'


function App() {

  /* 
   window.onload = function() {
                setTimeout(function() {
                    document.querySelector('.info').style.opacity = '1';
                    document.querySelector('.info').style.transform = 'translateY(0)';
                }, 400);
                setTimeout(function() {
                    document.querySelector('.content').style.opacity = '1';
                    document.querySelector('.content').style.transform = 'translateY(0)';
                }, 600);
                setTimeout(function() {
                    document.querySelector('.publics').style.opacity = '1';
                    document.querySelector('.publics').style.transform = 'translateY(0)';
                }, 800);
                setTimeout(function() {
                    document.querySelector('.contato').style.opacity = '1';
                    document.querySelector('.contato').style.transform = 'translateY(0)';
                }, 1000);
                setTimeout(function() {
                    document.querySelector('.foto').style.opacity = '1';
                    document.querySelector('.foto').style.transform = 'translateY(0)';
                }, 1200);
                setTimeout(function() {
                    document.querySelector('.logo').style.opacity = '1';
                    document.querySelector('.logo').style.transform = 'translateY(0)';
                }, 1000);
            }; 
            Implementar essa função no JSX
            Dom tree => Hooks do React
  */

  var txt_abt_me = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.Lorem ipsum dolor sit amet,'

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
        <Head0 />

        <AboutMe secName={'sobreMim'} titulo={'Sobre mim'} img_size={'250px'} UrlImg={'./src/assets/foto_prof.png'} img_class={'float-image-left'} texto={abm} display_subcontent={'d-flex flex-column'} subtitle={'Redes sociais'}/>

        <ContentListing secName={'pesquisa'} titulo='Pesquisa' img_size={'250px'} UrlImg="./src/assets/pesquisa.jpg" img_class={'float-image-right'} texto={pesq}  subtitle={'Tópicos de interesse'} itens={items}/>

        <ContentListing secName={'pesquisa'} titulo='Publicacões' img_size={'250px'} UrlImg="./src/assets/publicacoes.png" img_class={'float-image-left'} texto={publi}  subtitle={'Publicações de destaque'} itens={items}/>


        <ContentListing secName={'pesquisa'} titulo='Ensino' img_size={'250px'} UrlImg="./src/assets/ensino.jpg" img_class={'float-image-right'} texto={ens}  subtitle={'Matérias lecionadas'} itens={items}/>

        <Contato0  id ="contact" alt="" titulo="Contato"/>

        <Footer0 />
      
    </div>
  )
}

export default App
