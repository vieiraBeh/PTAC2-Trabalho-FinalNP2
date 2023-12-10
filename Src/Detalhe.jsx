import { useParams } from "react-router-dom";
import Navbar from './Components/Navbar';
import Card from './Components/Card';

export default function Detalhe(){
    const { id } = useParams();
    const listaLocalStorage = JSON.parse( localStorage.getItem("Lista"));
    
    const listaMV = listaLocalStorage.filter((objeto) => {
        return (objeto.id == id);
    });

    console.log(listaMV[0]);
    
    return(
        listaMV.map((video) => (
        <div>
        <Navbar nomeSite={'KPOP-MV'} />
        <div className='card-container'>
          <Card listaMV={listaMV} />
          <h3>{ video.duração }</h3>
          <h3>{ video.album }</h3>
          <h3>{ video.hashtag }</h3>

        </div>
      </div>
      ))
   );
}