$(document).ready(function(){
	//Examples of how to assign the Colorbox event to elements
	
	$(".photoGroup").colorbox({rel:'group2', transition:"fade"});
	$(".demoMovie").colorbox({
        inline:true,
        maxWidth:"90%",
        maxHeight:"90%",
        opacity: 0.7
      });
	$(".photoBtn").click(function(){
		$('#startPhoto').trigger("click");
	});

	
});