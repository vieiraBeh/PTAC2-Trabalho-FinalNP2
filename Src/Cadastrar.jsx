import { useState, useEffect } from "react";
import React from 'react';
import Navbar from './Components/Navbar';
import '../Cadastrar.css';

export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [grupo, setGrupo] = useState("");
    const [tituloFaixa, setTituloFaixa] = useState("");
    const [duração, setDuração] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [album, setAlbum] = useState("");
    const [listaMV, setListaMV] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => {localStorage.setItem ("Lista", JSON.stringify(listaMV)) }, [listaMV]);
    
    const salvar = (e) => {
        e.preventDefault();
        setListaMV([...listaMV,{
            atividade: atividade,
            grupo: grupo,
            tituloFaixa: tituloFaixa,
            duração: duração,
            hashtag: hashtag,
            album: album,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };

    return( 
        <div>
            <Navbar nomeSite={"KPOP-MV"} />
            <div className="container">
            <form onSubmit = {salvar}>
                <h1>Insira dados abaixo:</h1>
                <h2>Link</h2>
                <input type ="text"
                    value = {atividade}
                    onChange ={(e) => {setAtividade(e.target.value)}} />

            <h2>Grupo</h2>
                <input type ="text"
                    value = {grupo}
                    onChange ={(e) => {setGrupo(e.target.value)}} />

            <h2>Titulo da Faixa</h2>
                <input type ="text"
                    value = {tituloFaixa}
                    onChange ={(e) => {setTituloFaixa(e.target.value)}} />

            <h2>Duração da Faixa</h2>
                <input type ="text"
                    value = {duração}
                    onChange ={(e) => {setDuração(e.target.value)}} />

            <h2>Hashtag</h2>
                <input type ="text"
                    value = {hashtag}
                    onChange ={(e) => {setHashtag(e.target.value)}} />

             <h2>Album da Faixa</h2>
                <input type ="text"
                    value = {album}
                    onChange ={(e) => {setAlbum(e.target.value)}} />
                    <br/>
                    <br/>
                    <button>Cadastrar</button>
            </form>
            </div>
        </div>
    );

}