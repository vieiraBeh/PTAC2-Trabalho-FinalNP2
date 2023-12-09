import { useState, useEffect } from "react";
import "./Cadastrar.css"
import { Link } from "react-router-dom";

export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [l, setlistaMV] = useState("");
    const [listaMV, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => {localStorage.setItem ("Lista", JSON.stringify(lista)) }, [lista]);
    
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setlistaMV("");
    };

    return(
        <div className = "container">
            <h1>KPOP - MV</h1>
            <form onSubmit = {salvar}>
                <input type ="text"
                    value = {listaMV}
                    onChange ={(e) => {setlistaMV(e.target.value)}} />
                    <button>ADD</button>
            </form>
        </div>
    );
}