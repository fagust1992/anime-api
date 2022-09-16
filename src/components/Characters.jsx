import { useState } from 'react';

import Buscador from "./Buscador"




 export  default   function Characters({props}) {
 
  const [ busqueda, setbsuqueda] = useState("");

 const control_de_datos = ()=>{

  if (busqueda!=="") {
    console.log(busqueda)
    return props.filter((nose)=>  nose.title.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) )
     
  }
  return props
  
 }

 control_de_datos()

 const themadark= ()=>{
  const body=document.querySelector(".body");
  const header= document.querySelector("header");
  const cartas = document.querySelectorAll(".parrafo");
  const h4=document.querySelectorAll(".h4");
  const botones = document.querySelectorAll(".botones");
  
  
  cartas.forEach(element => {
    element.style.background="#fff"
    h4.forEach(element=>{
      element.style.color="#fff"
      })
      
    });
    botones.forEach(element => {
      element.style.background="#019851"
        
      });
header.style.backgroundImage="url('https://www.cinepremiere.com.mx/wp-content/uploads/2021/01/Rebuild-of-Evagelion-Prime-Video.jpg')"
body.style.background="#000000"

 }

const cambiarcolor= ()=>{
const body=document.querySelector(".body");
const header= document.querySelector("header");
const cartas = document.querySelectorAll(".parrafo");
const botones = document.querySelectorAll(".botones");
const h4=document.querySelectorAll(".h4");
header.style.backgroundImage = "url('https://wallpaper.dog/large/20511966.jpg')"
body.style.backgroundImage = "url('https://img.freepik.com/vector-gratis/fondo-abstracto-acuarela_220290-24.jpg?w=2000')"
h4.forEach(element=>{
element.style.color="#0A0909"
})
  cartas.forEach(element => {
  element.style.background="#BDA0A9"
    
  });
  botones.forEach(element => {
    element.style.background="#8D0730"
      
    });
}

    return(
  
        <>
        <Buscador
        busqueda={setbsuqueda}
        filtro={busqueda}
        />
 
  <div>
   <h4 style={{color:"#ffff"}} className="h4"> Da click para elegir el tema que mas te guste</h4>
    <button className='boton-click' onClick={cambiarcolor} style={{backgroundColor: "#8D0730", color: "#ffff" ,padding:"5px" , marginLeft:"5px", borderRadius:"20px", marginBottom:"5px"}}> theme Light</button>
    <button className='theme-dark' onClick={themadark} style={{backgroundColor: "#019851", color: "#ffff" ,padding:"5px" , marginLeft:"5px", borderRadius:"20px", marginBottom:"5px"}}> theme Dark</button>
  </div>
    <div className="row">
   
  
   {
  
    control_de_datos().reverse().map((intem,index) =>(
    
        <div key={index} className="col-12 col-md-4 col mb-2 col">
        <div className="card" >
         <div className="contendor-cartas">
         <div className="img">
         <img src={intem.images.jpg.image_url} alt="" />

         </div>
         <div className="parrafo">
         <div className="subgaleria">
         <label  className="name" >Name:</label>
       
       <p className="name">
         {(intem.title)}
       </p>
       <hr></hr>
     <p className="parrafo">
     {intem.synopsis}
      
     </p>
      

         </div>
            
        
         </div>
             </div>
       

        </div>
      
        </div>
        
    ))
  
   }

      
     
     </div>

        </>

       
    )
    
}

