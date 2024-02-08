
import './App.css';
import { useState } from 'react'
import Table from './components/Table'

function App() {
 
  const [NPlayers,setPlayers]=useState("");
  const [PTeam,setTeam]=useState("");
  var show=false;
  
  const Draw=[];
   var reservas= NPlayers% PTeam;
   var times= Math.floor(NPlayers / PTeam);
  
  const drawT=(e)=>
  {
  
  e.preventDefault();
  if(!NPlayers||!PTeam)return;
  
  while(times>0){
  var i=0;
  
  do {
    Draw.push("time "+times);
    i = i + 1;
  } while (i < PTeam);
  
  times--;
  
  if(times===0){
  
  while(reservas )
  {
      Draw.push(" Proximo");
      reservas--;
  }
  
  }
  
  
  }
  
  
  };
  
  function reset(){
  
  
  setPlayers("");
   setTeam("");
  
  
  }
  

  
  if(NPlayers && PTeam ){
show=true;


  }
  // 
    return (
     
     <div className="Team-draw">
         <h2>Sortear times</h2>
<div className='cont top'>

    <form onSubmit={drawT}>
   <div className='half'>
  <p>Total de Jogadores:</p>
  <input type='number'  value={NPlayers}  onChange={(e)=>setPlayers(e.target.value)}/>
    </div> 
 
   <div className='half'>
      <p> Jogadores por time:</p>
  <input type='number'  value={PTeam}   onChange={(e)=>setTeam(e.target.value)}/>
    </div>  


  <button type="submit"> criar grupo </button>
  
    </form>


</div>
<div className='cont leter'>
 {  show  &&(
  
  <div className='feedback'>
    <h2>resultado será {times} times , e {reservas} de próximo </h2>
  
  </div>
  
  )
  
  }
</div>


   
  <Table Draw={Draw} reset={reset}  />
  
</div>


    
    )
  }

export default App;
