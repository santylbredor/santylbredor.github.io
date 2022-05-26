var canvas =document.querySelector('#drawingCanvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var vale =document.createElement('img');
var alejo =document.createElement('img');
var santy =document.createElement('img');
var camilo =document.createElement('img');

vale.src='images/sakura.png';
alejo.src='images/alejo.png';
santy.src='images/santybb.png';
camilo.src='images/camilo.png';

let paintbrush = vale;

var handleMouseDown = () => {
	let randomNumber = Math.random();
	if( randomNumber <0.5){
		paintbrush= vale;
	}else{
		paintbrush=alejo;
	}
}
var handleMouseUp=()=>{
	mouseIsDown=false;
}

var context = canvas.getContext('2d');

var handleMouseMove =(event)=>{
 var left = event.clientX;
 var top = event.clientY;

 context.drawImage(paintbrush, left, top);
}

const handClick = () =>{
	if(paintbrush === vale){
		paintbrush=alejo;
	}else if(paintbrush===alejo){
		paintbrush = santy;
	}else if(paintbrush===santy){
		paintbrush=camilo;
	}else{
		paintbrush=vale;
	}
}
canvas.addEventListener('click', handClick);
canvas.addEventListener('mousemove', handleMouseMove);




