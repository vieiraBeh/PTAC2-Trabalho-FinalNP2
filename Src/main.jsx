import React from 'react';
import ReactDOM from 'react-dom/client';
import Destaque from './Destaque.jsx';
import Cadastrar from './Cadastrar.jsx';
import Home from './Home.jsx';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import "./Cadastrar.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/Cadastrar' element = {<Cadastrar />}></Route>
            <Route path = '/Destaque' element = {<Destaque />}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)