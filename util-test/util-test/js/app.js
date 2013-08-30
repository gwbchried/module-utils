// app.js

/**
 * windowViewXY function 
 * test case
 * firefox chrome ie(9)
 */
seajs.use(['jquery','util'],function($,util){
	$(function(){
		$(window).bind('resize',function(){
			var viewXY = util.windowViewXY();
			
			console.log("width:"+viewXY.x+","+"height:"+viewXY.y);
		});
	});
});
