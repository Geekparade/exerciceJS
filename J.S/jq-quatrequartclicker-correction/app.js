$(document).ready(function(){
	//votre code
	console.log('qq bonjour !');
	var counter = 0;

	var messages = [
		'Coucou, vite !',
		'Hey ! Ca va ?',
		'Dur dur d\'avoir de l\'imagination...',
		'Tu fais quoi ce soir ?',
		'lorem bidule bidule',
		'1998, la France est championne du moooooooooooonde !'
	];

	$('.counter span').click(function(){
		counter++;
		$(this).text(counter);

		var mod20 = counter%20;
		if(mod20 == 0){
			// Random number between 0 and 1
			// ex : 0.10938289 : de type FLOAT (nombre décimal)
			var aleatoire01 = Math.random();
			
			var len = messages.length;
			// multiply to get a number between 0 and messages.length
			var indexAleatoire = parseInt(aleatoire01 * len, 10);
			
			var msg = messages[indexAleatoire];
			alert(msg);
		}
	});


});