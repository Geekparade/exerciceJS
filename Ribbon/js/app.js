// function main(){

//    document.getElementById("94768-200.png").innerHTML;
//    document.getElementById("usbko.png").innerHTML;
//    document.getElementById("usbok.png").innerHTML;
//    document.getElementById("fa fa-arrow-up").innerHTML;
//    document.getElementById("fa fa-check-circle").innerHTML;

// }

// $(document.body).click(function() {
//  if ( $( "div:first" ).is( ":hidden" ) ) {
//    $( ".portusb" ).show( "slow" );
//  } else {
//    $( ".usbconnex" ).slideUp();
//  }
// });

// $(function main(){

// $(".usbok").hide();
// $(".reseauok").hide();
// $(".mario").hide();


$(function(){

    $('.usbko').draggable({
    	axis: 'y',
    	snap : '.container'
	});

	$('portusb').droppable({
 	    drop : function(){
 	   		alert("hello");
 	    } // cette alerte s'exécutera une fois le bloc déposé
    });

});
