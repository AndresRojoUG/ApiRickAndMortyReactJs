
import CharacterList from './components/CharacterList'
import Character from './components/Character'
//API https://rickandmortyapi.com/api/character
export default function App() {


  return (
  <div className=' text-dark container-fluid bg-dark'>
    <div className='titulosss'>
    <div className="title">Rick<span>and</span>Morty</div>
    <div className="title">Rick<span>and</span>Morty</div>
  <div className="title middle">Rick<span>and</span>Morty</div>
  <div className="title bottom">Rick<span>and</span>Morty</div>
    
    </div>
   
    <CharacterList/>
   

 
  </div>
  )
}
