$(document).ready(function() {


$("#1b, #1c, #2a, #2b, #3a, #4a, #4b, #5a, #5b, #5c, #5d, #5e, #6a, .3b, .3c, .3d, .3e, .3f, .3g, #v1, #v2, #v3, #v4, #v5, #v6, #v7, #v8, #v9, #v10, #v11, #v12, #v13, #v14, #v15").hide();


$("#1a").click(function(){
$("#1b").show();
$("#1a").hide();
$("#1c").show();

});


$("#1b").click(function(){
    $("#3a, .3b, .3c, .3d, .3e, .3f, .3g").show();
});

$("#1c").click(function(){
	$("#1b, #1c, #2a, #2b, #3a, #4a, #4b, #5a, #5b, #5c, #5d, #5e, #6a, .3b, .3c, .3d, .3e, .3f, .3g, #v1, #v2, #v3, #v4, #v5, #v6, #v7, #v8, #v9, #v10, #v11, #v12, #v13, #v14, #v15").hide();
    $("#1a").show();

});

$("#3a").click(function(){
	$("#4a, #4b").show();

});

$("#4a").click(function(){
	$("#v1, #v2, #v3, #v4, #v5, #v6").show();
    $("#v7, #v8, #v9, #v10, #v11, #v12, #v13, #v14, #v15, #5a, #5b, #5c, #5d, #5e").hide();

});

$("#4b").click(function(){
	$("#5a, #5b, #5c, #5d, #5e").show();
    $("#v1, #v2, #v3, #v4, #v5, #v6, #v7, #v8, #v9, #v10, #v11, #v12, #v13, #v14, #v15").hide();

});



// vignette button



$("#5a").click(function(){
	$("#v7, #v8, #v9").show();
    $("#v1, #v2, #v3, #v4, #v5, #v6, #v10, #v11, #v12, #v13, #v14, #v15").hide();

});

$("#5b").click(function(){
	$("#v7, #v8, #v9, #v10, #v11").show();
    $("#v1, #v2, #v3, #v4, #v5, #v6, #v12, #v13, #v14, #v15").hide();

});

$("#5c").click(function(){
	$("#v7, #v12").show();
    $("#v1, #v2, #v3, #v4, #v5, #v6, #v8, #v9, #v10, #v11, #v13, #v14, #v15").hide();

});

$("#5d").click(function(){
	$("#v2, #v6").show();
    $("#v1, #v3, #v4, #v5, #v7, #v8, #v9, #v10, #v11, #v12, #v13, #v14, #v15").hide();

});

$("#5e").click(function(){
	$("#v5, #v8, #v10, #v13, #v14, #v15").show();
    $("#v1, #v2, #v3, #v4, #v6, #v7, #v9, #v11, #v12").hide();

});
// $("#0a").click(function(){
//	$("#1b, #2a, #2b, #3a, #4a, #4b, #5a, #5b, #5c,  #5d, .5e, #6a, .3b, .3c, .3d, .3e, .3f, .3g").hide();

// });

var flag1=0;
$("#0a").click(function(){
    if (flag1==0) {
      $("#6a").show();
        flag1=1;
    }
    else {
        flag1=0;
        $("#6a").hide();
    }


});



});
