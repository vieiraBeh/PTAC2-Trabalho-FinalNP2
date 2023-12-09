import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';

export default function Home(){

return(
<div className = "container">
    <Menu/>
    <Navbar nomeSite = {"KPOP-MVS"} />
    <div className='card-container'>
        <Card listaMV = {listaMV} />
    </div>
</div>
)

}