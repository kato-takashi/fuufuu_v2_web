$(function(){
    
  //   $(".intro-header").fadeOut(800, function(){
  //   	$(".player").mb_YTPlayer();
		// $(".intro-header").css("backgroundImage", "url()").fadeIn(800); 
		// });
      var count =0; 
    	$(".player").mb_YTPlayer();
    	var delaySpeed = 1000;
    	var fadeInArray = ['.navbar-nav', '.navbar-header', '.intro-message h1', '.intro-message h3', '.intro-divider', '.intro-social-buttons', '.row img'];
    	for(var i=0; i<fadeInArray.length; i++){
    		$(fadeInArray[i]).delay(i*(delaySpeed)).fadeIn('slow', function(){
            count++;
            if(count == fadeInArray.length){
              startDemoMov();
              return;
            }
        });
    	}

      // startDemoMov();
      function startDemoMov(){
        $('#startYbBtn').trigger("click");
      }

  });