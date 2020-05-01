$(document).ready(function() {
    
    $(document).ready(function() {
$("#1b, #1c, #2a, #2b, #2c, #3a, .3b, #3c, #3d, .3e, #3f").hide();

    
$("#1a").click(function(){
  $("#1b, #1c").show();
});
        
$("#1b").click(function(){
  $("#2a, #2b").show();
  $("#1c").hide();
    });
	
$("#1a").click(function(){
  $("#1b, #1c, #2a, #2b, #2c, #3a, .3b, #3c, #3d, .3e, #3f").hide();    
});
        
    });
    
});