/* Un objeto que representa a los elementos pintados. Recibe un sprite que tendra la
imagen que lo representa, ademas de los parametros comunes x, y, ancho y alto*/
var Elemento_pintado = function (sprite, x, y, ancho, alto) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.interaccion=false;

  this.interactuar = function(jugador){
  	
  }
}