export  default   function  Header({ruta_img}) {

    return(
        <>
  

    <header>
		<div class="container">
			<div class="row contenedor_logo_menu">
				<div class="logo col-xs-12 col-md-6 " style={{fontSize:"25px"}}>
				❤🧡💚💜🤎🧡	peliculas recomendadas de Anime 
                    
                    
                     
				</div>
				
				<div class="menu col-xs-12 col-md-6">
					<img src={ruta_img} alt=""  className="logo-header"/>
				</div>
			</div>

			<div class="row textos">
				<div class="col-md-12">
					<h2 class="primera_linea">Las mejores animes 3 temas!</h2>
					<h3 class="segunda_linea">Busca por nombre la pelicula para ver la sipnosis</h3>
					<div class="contenedor-btns">
					
					</div>
				</div>
			</div>
		</div>
	</header>
       
        </>
    )
}