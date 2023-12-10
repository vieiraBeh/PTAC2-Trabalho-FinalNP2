import { useState, useEffect } from "react";
import '../Cadastrar.css';

export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [listaMV, setListaMV] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => {localStorage.setItem ("Lista", JSON.stringify(listaMV)) }, [listaMV]);
    
    const salvar = (e) => {
        e.preventDefault();
        setListaMV([...listaMV,{
            atividade: atividade,
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
                <input type ="text"
                    value = {atividade}
                    onChange ={(e) => {setAtividade(e.target.value)}} />
                    <button>ADD</button>
            </form>
            </div>
        </div>
    );
}