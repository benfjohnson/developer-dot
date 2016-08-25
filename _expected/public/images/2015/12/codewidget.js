
var CWsampleToShow = 1;

// sample input widgets

jQuery( document ).ready(function() {
  jQuery( "#sample2radio" ).click(function() {
      hidealloutputs();
      jQuery("#CWsampleTitle").text("Sample 2");
      jQuery("#widgetSample1").css("display","none");
      jQuery("#widgetSample3").css("display","none");
      jQuery("#widgetSample2").fadeIn(800, function(){
        CWsampleToShow = 2;
        });      
   });

     jQuery( "#sample1radio" ).click(function() {
      hidealloutputs();
      jQuery("#CWsampleTitle").text("Sample 1");
      jQuery("#widgetSample2").css("display","none");
      jQuery("#widgetSample3").css("display","none");
      jQuery("#widgetSample1").fadeIn(800, function(){
        CWsampleToShow = 1;
        });      
   });

     jQuery( "#sample3radio" ).click(function() {
      hidealloutputs();
      jQuery("#CWsampleTitle").text("Sample 3");
      jQuery("#widgetSample2").css("display","none");
      jQuery("#widgetSample1").css("display","none");
      jQuery("#widgetSample3").fadeIn(800, function(){
        CWsampleToShow = 3;
        });      
   });


   
 function hidealloutputs(){
      jQuery("[id^=widgetOutput]").each(function(){
        if(jQuery(this).css("display") === "block"){
          jQuery(this).fadeOut(800);
        }
      })

      jQuery("#widgetsamplelabel").text("Sample Output");

 }  
   
   
 // sample Output
 
      jQuery( "#revealSample" ).click(function() {

		if(CWsampleToShow == 1){
		  jQuery("#widgetsamplelabel").text("Sample 1 Output");
		  jQuery("#widgetOutput2").css("display","none");
		  jQuery("#widgetOutput3").css("display","none");
		  jQuery("#widgetOutput1").fadeIn(800);      
		}	
   
		if(CWsampleToShow == 2){
		  jQuery("#widgetsamplelabel").text("Sample 2 Output");
		  jQuery("#widgetOutput1").css("display","none");
		  jQuery("#widgetOutput3").css("display","none");
		  jQuery("#widgetOutput2").fadeIn(800);      
		}	

		if(CWsampleToShow == 3){
		  jQuery("#widgetsamplelabel").text("Sample 3 Output");
		  jQuery("#widgetOutput1").css("display","none");
		  jQuery("#widgetOutput2").css("display","none");
		  jQuery("#widgetOutput3").fadeIn(800);      
		}	
   
	});

});