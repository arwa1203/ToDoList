/* Variables */

/* Code to execute */

addDelete();
checkOff();
inputEnter();

/*Functions*/

function addDelete(){

	$("ul").on("click", ".delete",function(e){

		// fade and delete element
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		e.stopPropagation();
	});

}



function checkOff(){
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});
}

function inputEnter(){

	// capture what the user types into the input field after hitting enter
	$("input[type='text']").on("keypress", function(event){

		if(event.which === 13){
			
			$("ul").append(makeLiLine($(this).val()));
			$(this).val("");
		}


	});

}

function makeLiLine(task){
	var icon = "<i class=\"fas fa-minus-circle\"></i>";
	console.log(task);
	var str = "<li><span class=\"delete\">" + icon + "</span>" + task + "</li>";
	return str;


}