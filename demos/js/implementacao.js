$(function() {

	// Armazena as posições iniciais e o fator de multiplicação
	var iniPos = {
		'sky-front': {pos:{}, mult:0.8},
		'sky-back': {pos:{}, mult:0}
	};

	// Define as posições iniciais
	for(var i in iniPos) {
		iniPos[i].pos = $('.'+i).offset();
	}

	// Atribui o controle de posicionamento ao evento de scroll
	$(window).scroll(function() {
		// Armazena a posição de scroll da janela
		var scrollTop = $(window).scrollTop();
		// Armazena a altura do documento
		var dHeight = $(document).height();
		// Armazena a altura da janela
		var wHeight = $(window).height();

		// Define as posições atuais do elemento com base na posição
		// de scroll da janela e no fator de multiplicação
		for(var i in iniPos) {
			$('.'+i).offset({top: iniPos[i].pos.top - scrollTop * iniPos[i].mult, left: 0});
		}
	});
});
