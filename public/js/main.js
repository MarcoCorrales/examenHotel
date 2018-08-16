$(document).ready(function(){
 
	$(window).scroll(function(){
		let barra = $(window).scrollTop(); //valor de la posicion del scroll
		let posicion =  (barra * 0.05);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});