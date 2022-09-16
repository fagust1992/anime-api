
import React from "react"

 export  default   function Paginacion({ yugi,onNext,vampire}) {
 

const haldlePrevious=()=>{
yugi()
console.log("api2")

}

const haldleNext=()=>{
onNext()
console.log("entramos")
}
const haldlePrevious1=()=>{
    vampire()
    console.log("entramos")
    }
      
    return(
        <>
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>

    <ul className="pagination justify-content-center">

      <li className="page-item">
            <button className="botones" onClick={haldleNext}>Naruto</button>
            </li> 

    
      <li className="page-item">
     <button className="botones" onClick={haldlePrevious}>Pokemon</button>
            </li> 
            <li className="page-item">
     <button className="botones" onClick={haldlePrevious1}>Vampire</button>
            </li> 


 
  
  
      
      
       
    </ul>
        </>

       
    )
    
}

