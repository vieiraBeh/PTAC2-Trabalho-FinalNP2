import { Link } from 'react-router-dom'
export default function Menu(){

    return(
    <menu className='Menu'>

    <Link to = '/'></Link>
    <Link to = '/Cadastrar'></Link>
    <Link to = '/Destaque'></Link>
    
    </menu>
    )
}