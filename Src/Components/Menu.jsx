import { Link } from 'react-router-dom'
import "../Styles/Menu.css"
export default function Menu(){

    return(
    <menu className='Menu'>
    <Link to = '/'>Home</Link>
    <Link to = '/Cadastrar'>Cadastrar</Link>
    <Link to = '/Destaque'>Em alta</Link>
    </menu>
    )
}