import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './Characters';
import Paginacion from './Paginacion';
import{ useEffect , useState} from 'react';
import Header from './header';
import Footer from './Footer';
import Img from './Img';

   function MiApi() {
    
    const [personajes,setPersonajes] = useState([]);
    const [links1 ,setlinks] = useState([]);
    const url = ' https://api.jikan.moe/v4/anime?q=vampire hunter&sfw"'; 

    
    const consultarInformacion = async (url) => {
  fetch(url)
  .then((response) => response.json())
  .then((data)=>{
const array= data.data
array.reverse()


    setPersonajes(data.data);
    setlinks(data.links)
  })

.catch((error) => console.log(error));
        };
const pokemon= () =>{
    consultarInformacion("https://api.jikan.moe/v4/anime?q=pokemon&sfw")
    console.log("entramos")
}

const naruto = () =>{
    consultarInformacion("https://api.jikan.moe/v4/anime?q=naruto&sfw")

}

const vampire = () =>{
    consultarInformacion("https://api.jikan.moe/v4/anime?q=vampire hunter&sfw")

}

   useEffect(()=>{
  consultarInformacion(url)
 },[])



 
    return(
        <>
 
    <Header ruta_img={Img.logo}/>
        <div className='container'>
   
     
  <Paginacion    onNext={naruto} yugi={pokemon}  vampire={vampire}/>
          <Characters props={personajes} funcion={consultarInformacion}  data={links1}/>
       
        </div>
<Footer/>
        </>

       
    )
    
}

export  default MiApi