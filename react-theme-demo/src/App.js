import React from 'react';
import './assets/css/style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';



function App() {

    return (
        <BrowserRouter basename={null}>
            <div>
                <Header/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
