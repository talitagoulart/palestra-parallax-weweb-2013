$(function(){
	$(window).scroll(function() {
		console.log('oi');
		// Passa por todas as seções
		$('.section').each(function() {
			// Armazena a posição de scroll da janela
			var scrollTop = $(window).scrollTop();
			// Armazena a distância da seção com relação ao topo da página
			var posTop = $(this).offset().top;

			// Calcula a posição do BG
			var posBg = -((scrollTop - posTop) / $(this).data('speed'));
			// atualiza a posição do BG
			$(this).css('background-position', '50% '+posBg+'px');
		});
	});
});