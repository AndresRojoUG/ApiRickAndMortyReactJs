
export default function Character({character}) {


  return (
    
         <div className="contenedor-imagen text-center p-2">
          
           
             {character.name.length>13? <h5>{character.name}</h5>: <h3>{character.name}</h3>} 

             <div className="contendedor_seguir">
            <img  className=" imagenCharacter img-fluid rounded-pill" src={character.image} alt={character.name} />

            <div className="TextoImagen">
              
              
              <h6>Status: {character.status}</h6>
              <h6>Species: {character.species}</h6>
              <h6>Gender: {character.gender}</h6>
              <h6>Location Name: {character.location.name}</h6>
              
            <p>Origin Name: {character.origin.name}</p></div>
            </div>
          </div>
   
  )
}
