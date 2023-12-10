import "../Styles/Card.css"

   export default function Card ({listaMV}){
    return(
        listaMV.map((video,index) =>

        <div className = "card" key={index}>
            <iframe 
            width="100%" 
            height="250"
             src={`https://www.youtube.com/embed/${video.atividade.slice(17)}`} 
            title="BABYMONSTER - &#39;BATTER UP&#39; LIVE PERFORMANCE (School Ver.)" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen>
             </iframe>
        
        
        <h3>{ video.tituloFaixa }</h3>
        <p>{ video.grupo }</p>
      </div>
        )
    );
}