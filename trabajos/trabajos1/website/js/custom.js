$(document).ready(function() {
	$('body').ripples({
			dropRadius: 15, 
			perturbance: 0.02,
			
		});
});

function abremodal(){ $("body").append('<div id="modal"> <div id="mierda"><iframe width="1080" height="500" src="https://www.youtube.com/embed/kn0C3Ts5yi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div id="close"> Cerrar </div></div>')

$( "#close" ).click(function() {
  $("#modal").remove() ;
});
}