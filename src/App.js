import 'bootstrap/dist/css/bootstrap.min.css';
import{ useEffect , useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import './App.css';

import MiApi from './components/MiApi';


function App() {

 
  const[loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  },[])
  
  return (
   
    <div className="App">
  
{
loading?
<ClipLoader color={"#516093"} loading={loading}  size={150} />
:
<MiApi/>
}
   

    

    </div>
  );
}

export default App;
