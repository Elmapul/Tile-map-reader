$(document).ready(function(){
  $("body").keydown(function(event){ 

if (event.keyCode==39){//direita
posX++;

}
if (event.keyCode==38){ //cima
posY--;

}
if (event.keyCode==37){//esquerda
posX--;

}
if (event.keyCode==40){
//alert("a");
posY++;
}
update();


  });
});


