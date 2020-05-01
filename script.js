$(document).ready(function() {
    
$(document).ready(function() {   
$("#1b, #2a, #2b, #3a, #4a, #4b, #5a, #5b, #5c, #5d, .5e").hide();


$("#1a").click(function(){
$("#1b").show();
});
  

$("#1b").click(function(){
	
  $("#2a, #2b").show();

});

$("#2a").click(function(){
	$("#3a").show();

});
    
$("#2b").click(function(){
	$("#1b, #2a, #2b, #3a, #4a, #4b, #5a, #5b, #5c,  #5d, .5e").hide();

});
   
$("#3a").click(function(){
	$("#4a, #4b").show();

});   
    
$("#4a").click(function(){
	$().show();

});
    
$("#4b").click(function(){
	$("#5a, #5b, #5c, #5d, .5e").show();

}); 

$("#0a").click(function(){
	$("#1b, #2a, #2b, #3a, #4a, #4b, #5a, #5b, #5c,  #5d, .5e").hide();

});
    
});
    
});