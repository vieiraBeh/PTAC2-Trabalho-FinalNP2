import "../Styles/Card.css"

   export default function Card ({listaMV}){
    return(
        listaMV.map((atividade,index) =>

        <div className = "card" key={index}>
            <iframe 
            width="1020" 
            height="574"
             src={`https://www.youtube.com/embed/${atividade.slice(17)}`} 
            title="BABYMONSTER - &#39;BATTER UP&#39; LIVE PERFORMANCE (School Ver.)" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen>
             </iframe>
        </div>)
    );
}