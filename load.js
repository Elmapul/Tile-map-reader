//load tileset
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 
 
 //maps
var teste = new Array();
 teste[0]="mapa-corrigido.xml";
xmlhttp.open("GET",teste[0],false);
xmlhttp.send();

var xmlDoc= new Array();
xmlDoc[0]=xmlhttp.responseXML;

var x=xmlDoc[0].getElementsByTagName("layers");
var i=0;
var layer =new Array();



var z = x[0].childNodes;
layerCount=z.length;


for (teste3=0; teste3<layerCount;teste3++){ 
layer[teste3]=(x[i].getElementsByTagName("layer")[teste3].childNodes[0].nodeValue);

}


var n = layer[1].split(","); 
var auxilar=n[0].split("."); 
var n1=auxilar[0];
var n2=auxilar[1];


///////////////////////////////////////////////////////////////////////////
//load screen

var canvas = document.getElementById('testCanvas');
var context = canvas.getContext('2d');
var ctx = canvas.getContext('2d');
context.fillStyle="#FF0000";
context.fillRect(0,0,150,75);
var imageObj = new Image();



var teste=0;
var teste2=0;
errorCount=0;

////aqui
 
var atributo=z[0].getAttribute('tileset');
 
preloadimages(['mage_city.png']).done(function(images){ 
 alert(images.length)

var imagens =new Array();
imagens[0]='mage_city.png';



/////////
imageObj.src = imagens[0];


//imageObj.onload = function() { //verifica se carregou a imagen
for (teste3=0;teste3<layerCount;teste3++){ //seleciona a camada à desenhar
	for (teste=0; teste<25;teste++){
		for (teste2=0; teste2<19;teste2++){
		var n = layer[teste3].split(","); 
		try {var auxilar=n[teste2+(teste*25)].split(".");}
			catch (error){ errorCount ++;}
		var n1=auxilar[0];
		var n2=auxilar[1]; 
		if (n1==0){ //previne que o primeiro pixel seja diferente de transparente
			if (n2==0){
			n1=4; //posição x do novo transparente, default 4
			n2=12;//posição y do novo transparente, default 12
			}}

		context.drawImage(imageObj,n1*32,n2*32,32,32,teste2*32,teste*32,32,32); //verificar se esse metodo funciona em todos navegadores


		}


	}
}
//}

})
