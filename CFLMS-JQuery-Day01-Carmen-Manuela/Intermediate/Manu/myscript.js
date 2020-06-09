$("form").submit(function(e) {

	e.preventDefault();	

});

// 1) remove form
// $(document).ready(function(){
// 	$("#myform").remove();
// })

//2)Create 5 new DIVs in the article element
$(document).ready(function() {
    var newItem = $('<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>'); 
	$('article').append(newItem);
	
	//Carmen
	//$('article').prepend("<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>"); 
});

// 3) Within the input field change the value to "Search for..."
$(document).ready(function() {
	var newValue = $('#msg').attr("value");
	console.log(newValue);

	console.log($('#msg').val());
	
	//setting of Variable val:
	$('#msg').val("Search for");
});

//4) Add a class name of "box" to each new DIV
$(document).ready(function() {
	$("div").addClass("box");
})

//5) Change the link to "www.codefactory.wien"
$(document).ready(function() {
	$("a").attr("href","www.codefactory.wien");
})

