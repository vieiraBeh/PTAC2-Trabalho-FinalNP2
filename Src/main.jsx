import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes,Route, BrowserRouter} from "react-router-dom";
import Destaque from './Destaque';
import Cadastrar from './Cadastrar';
import Home from './Home';
import Detalhe from './Detalhe';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/Cadastrar' element = {<Cadastrar/>}></Route>
            <Route path = '/Destaque' element = {<Destaque/>}></Route>
            <Route path = '/Detalhe/:id' element = {<Detalhe/>}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)