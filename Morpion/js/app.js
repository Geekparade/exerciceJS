(function main(){
var row = 3;
var col = 3;
	function createTable(row,col){
		for(var i=1; i<=row; i++){
			$(".morpion--table").append("<tr id="+i+">");
			for(var j=1; j<=col; j++){
				$(".morpion--table").append("<td id="+i+j+">"+"</td>")
			}
			$(".morpion--table").append("</tr>");

		}
	}
	createTable(row,col);
	var joueurUn = "x";
	var joueurDeux = "o";
	var count = true;
	$("td").click(function(){
		if(count){
			$(this).html(joueurUn);
		}else{
			$(this).html(joueurDeux);
		}
		count= !count;
	})
})();
