import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';

function App() {
    return (
        <div className='app'>
            <Header />

            <div className='main-content'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/pesquisa" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
