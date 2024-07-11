import { useState } from 'react'
import './App.css'
import Head0 from './Head0'
import Footer0 from './Footer0'
import Content0 from './Content0'

function App() {
  

  return (
    <div>
        <Head0 />
        <Content0 UrlImg="../assets/perfil.png" id ="about" alt="Professor" titulo="Sobre mim" />
        <Content0 UrlImg="../assets/pesquisa.jpg" id ="research" alt="Research" titulo="Pesquisa"/>
        <Content0 UrlImg="../assets/publicacoes.png" id ="publications" alt="Publications" titulo="Publicações"/>
        <Content0 UrlImg="../assets/pesquisa.jpg" id ="teach" alt="Research" titulo="Ensino" />
        <Content0 UrlImg="" id ="contact" alt="" titulo="Contact"/>
        <Footer0 />
    
    </div>
  )
}

export default App
