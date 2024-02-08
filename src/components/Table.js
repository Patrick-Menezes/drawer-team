
import { useState } from 'react'

import './Table.css';

function Table (props)  {

  const [Resulti,setReult]=useState('..');
 



var Result="";
  const dRAW= (e)=>{
  
  
    e.preventDefault();
    


     var Rand= Math.floor(Math.random() * (props.Draw.length - 0));
    
      Result=props.Draw[Rand]; 
    

    props.Draw.splice(Rand,1);

    setReult(Result);






if(props.Draw.length===0){

  props.reset();
  setReult("");
}




}




  return (


<div className='draw-action'>

<div className='result'>
<h2>Resultado do grupo </h2>

<ul>
      {props.Draw.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

</div>

<div className='buton'>
<h2 value={Resulti}>voce é: {Resulti}</h2>

<form onClick={dRAW}>
  <button >Sortear</button>
</form>


</div>


</div>
  )
}

export default Table
