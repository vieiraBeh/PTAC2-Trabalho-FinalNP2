import { useState, useEffect } from "react";
import "./Cadastrar.css"
import { Link } from "react-router-dom";

export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => {localStorage.setItem ("Lista", JSON.stringify(lista)) }, [lista]);
    
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };

    const remover = (id) => {
        setLista(lista.filter((ativ) => ativ.id !== id));
    }

    return(
        <div className = "container">
            <h1>Lista de Musicas Ver. Kpop</h1>
            <form onSubmit = {salvar}>
                <input type ="text"
                    value = {atividade}
                    onChange ={(e) => {setAtividade(e.target.value)}} />
                    <button>ADD</button>
            </form>
            {lista.map((ativ) => 
              <ul key = {ativ.id}>

                <Link to ={ `/Detalhe/${ativ.id}`}>
                    <p>{ativ.atividade}</p>
                </Link>
                <li>
                    <button onClick={() => remover(ativ.id)}>REMOVE</button>
                </li>
            </ul>
            )}
        </div>
    );
}