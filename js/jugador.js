/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,  
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  mover: function(movX, movY, tecla){
    this.x+=movX;
    this.y+=movY;
    if  (tecla=="arriba" || tecla=="abajo"){
      this.ancho=15;
      this.alto=30;
    }if(tecla=="der" || tecla=="izq"){      
      this.ancho=30;
      this.alto=15;
    }

    switch(tecla){
      case "arriba": this.sprite= "imagenes/auto_rojo_arriba.png";        
      break;
      case "abajo": this.sprite= "imagenes/auto_rojo_abajo.png";
      break;
      case "izq": this.sprite= "imagenes/auto_rojo_izquierda.png";
      break;
      case "der": this.sprite= "imagenes/auto_rojo_derecha.png";
      break;
    }
  },
  perderVidas: function(cantVidas){
    this.vidas-=cantVidas;
  },
  // y todo lo que haga falta para que cumpla con sus responsabilidades
}
