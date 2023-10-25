import { useState } from "react"


function App() {

const [count , setCoount] = useState(0 )

   const increment =() =>{
      setCoount(count+1)
   }
  return <>
  <p>compteur : {count} </p>
  <button onClick={increment}>incrementer</button>

</>
}
export default App
