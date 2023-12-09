import "../Cadastrar.css"

   export default function Card ({listaMV}){
    return(
     
        listaMV.map((video) =>
        <div className = "card">
            <iframe 
            width="1020" 
            height="574"
             src="https://www.youtube.com/embed/kmwrN2HDgJs" 
            title="BABYMONSTER - &#39;BATTER UP&#39; LIVE PERFORMANCE (School Ver.)" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen>
             </iframe>
        </div>)
    );
}