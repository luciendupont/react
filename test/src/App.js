import { useState } from "react"
import axios from "axios";
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

const [db,setDb]=useState("");
const loadData=()=>{
  axios.get("http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=avenger",
  {
    headers:{Accept:"application/json"}
  }).then((reponse)=>)
}


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