
const Buscador = (props)=>{
    console.log(props)
    return(

        <>
        
        <h4 style={{color:"#ffff"}} className="h4"> filtra por nombre</h4>
        <input className="input" type="text" value={props.filtro} onChange={(e) => props.busqueda(e.target.value)} placeholder="buscador" />
     
        </>
        )
}

export default Buscador; 