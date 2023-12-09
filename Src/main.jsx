import React from 'react';
import ReactDOM from 'react-dom/client';
import Detalhe from './Detalhe/Detalhe';

import {Routes,Route, BrowserRouter} from "react-router-dom";

import ToListen from './To listen/ToListen.jsx';

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