import { useEffect, useState } from 'react'
import Character from './Character'
import { Button } from 'bootstrap'

    function BuscarCharacter({characters,setNombreBuscar,nombreBuscar, setPage}){

    const [nameBuscado, setNameBuscado] = useState('')
    const [listaBuscado, setNameListaBuscado] = useState([])
 


    useEffect(()=>{
 
        setNameListaBuscado(characters)
BuscarNombre()
    },[nameBuscado])

 


    function BuscarNombre(){
        if(nameBuscado.length<1){
            setPage(1)
            setNameListaBuscado([])
        }
        console.log(characters)
     
        setNombreBuscar(nameBuscado)
        
      
    }

    
return(
    <>
<div className="accordion " id="accordionExample">


  
  <div className="accordion-item ">
    <h2 className="accordion-header bg-dark">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        BUSCAR POR NOMBRE
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-dark text-white">
      <div>
        <form  >
            <label  className="form-label">Buscar</label>
            <input value={nombreBuscar} onChange={(e)=>{setNameBuscado(e.target.value)}} type="text" className="form-control bg-dark text-white" aria-describedby="passwordHelpBlock" />
        </form>
    {
        listaBuscado.length>=1?    <div className='contenedorSearch'>
        <div className="row ">
        { listaBuscado.map(character => {
        return(
        <div className="col-sm-12  " key={character.id}>
            <div className="card d-flex">
              <div onClick={()=>{
              setNameBuscado(character.name)
              }} className="card-body buscadosSearch d-flex text-center p-2 align-items-center bg-dark text-white">
              <img className='imagenSearch img-fluid rounded-pill' src={character.image} alt="" />
                <p className="card-text">{character.name}</p>
                
              </div>
            </div>
          </div>
        )
            })}
        
        </div>
        </div>:
        <div><h3>buscando...</h3></div>
    }
     
    </div>
      </div>
    </div>
  </div>
</div>


</>
   
)

}

function NavPage({page,setPage}){

 
    return(
    <header className='d-flex justify-content-between align-items-center p-5'>
        <p>Pagina actual: {page}</p>
            <div>
            {
        page<2?<button  className='btn btn-primary btn-sm m-4'>no hay paginas</button>:
        <button className='btn btn-primary btn-sm btn-sm m-4'
        onClick={()=>{

          
                setPage(page-1)
          
    
        }}
        >Pagina anterior {page-1}</button>
        
        }
        

        <button className='btn btn-primary btn-sm btn-sm m-4'
        onClick={()=>{

          
                setPage(page+1)
          
    
        }}
        >Suiguiente pagina {page+1}</button>
            </div>
        
    </header>
        )
}

export default function CharacterList() {

    const [characters, setCharacters] = useState([])
    
    const [nombreBuscar, setNombreBuscar] = useState('')

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    
    useEffect(() => {
       
        async function fetchData() {
            
            try{
            
                  
                    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${nombreBuscar}`)
               
            

            if(response.status===200){

                const data = await response.json()
          
                setLoading(false)
    
                
                setCharacters(data.results)
            }else   if(response.status===404){
                setPage(page-1)
                setNombreBuscar('')
                window.alert('No hay mas personajes que mostrar')
            }
        
        }catch(error){
            console.log(error)
        }

        }
        fetchData()
    
    }, [page,nombreBuscar])

    
 


    return (
        <>
        <div className='container bgMorty'>
     

 

            <BuscarCharacter nombreBuscar={nombreBuscar} setPage={setPage} characters={characters} setNombreBuscar={setNombreBuscar}/>
                <NavPage page={page} setPage={setPage} />
            {
                loading ? <h1>Cargando...</h1> :
                    <div className="row">
                        {
                            characters.map(character => {
                                return (
                                    <div className='col-md-3' key={character.id} >
                                        <Character character={character} />
                                    </div>
                                )
                            })
                        }
                    </div>
            }
  <NavPage page={page} setPage={setPage}/>
        </div>

      
        </>
    )
}
