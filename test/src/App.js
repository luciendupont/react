import { useState } from "react"

function App(){
const [nom,setNom] =useState("")
const [prenom,setPrenom]=useState("")
const handlechangeNom =(event)=>{setNom(event.target.value)}; 
const handlechangePrenom = (event)=>{setPrenom(event.target.value)};
const [compteur,setCompteur]= useState(0);
const handleclick=()=>{
  setCompteur(compteur + 1)
}
const [element,setElement]=useState("");
const [list,setList]=useState([]);
const handlechange=(evt)=>{setElement(evt.target.value)}
const handleclick1=(evt)=>{setList([...list,element])}

  return <>

<input type="text" value={nom} onChange={handlechangeNom}></input>
<input type="text" value={prenom} onChange={handlechangePrenom}></input>
<div>
  bonjour {nom} {prenom}
</div>

<button onClick={handleclick}>compteur:{compteur}</button>
<br></br>

<input type="text" value={element} onChange={handlechange}/><br></br>
<button onClick={handleclick1}>ajouter</button>
<>{list.map((ligne)=>(<div>{ligne}</div>))}</>




  </> 


}

export default App 