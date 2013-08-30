/**
 * This is a base model 
 * provide some util 
 * function
 */
define('util',function(require,exports){
	var _DOM = document;
	var _MAX = Math.max;
	var _MIN = Math.min;
	/**
	 * 定义得到浏览器视口
	 * 宽度和高度的方法
	 * return {
	 *   x : width,
     *   y : height
	 * }
	 */
	exports.windowViewXY = function(){
		var x = 0;
		var y = 0;
		if(_DOM.compatMode == "CSS1Compact"){
			y = _DOM.documentElement.clientHeight;
			x = _DOM.documentElement.clientWidth;
		}else{
			y = _DOM.body.clientHeight;
			x = _DOM.body.clientWidth;
		};
		return {
			x : x,
			y : y
		};
	};

	/**
	 * 定义得到浏览器卷入行
	 * 宽度和高度的方法
	 * return {
	 *   x : width,
     *   y : height
	 * }
	 */
	exports.windowScrollXY = function(){
		var x = 0;
		var y = 0;
		if(_DOM.compatMode == "CSS1Compact"){
			y = _DOM.documentElement.scrollHeight;
			x = _DOM.documentElement.scrollWidth;
		}else{
			y = _DOM.body.scrollHeight;
			x = _DOM.body.scrollWidth;
		};
		return {
			x : x,
			y : y
		};
	};

	// 格式化日期时间方法
	exports.formatDate = function(now){     
		var   year=now.getFullYear();     
		var   month=now.getMonth()+1;     
		var   date=now.getDate();     
		var   hour=now.getHours();     
		var   minute=now.getMinutes();     
		var   second=now.getSeconds();     
		return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;     
	};

	/**
	 * 格式化按byte输入的大小
	 * 0-10KB 以byte显示
	 * 10KB-10MB 以KB显示
	 * 10MB-10GB 以MB显示
	 * 10GB-10TB 以GB显示
	 * 10TB以上   以TB显示
	 */
	exports.formatSpaceSize = function(spaceSize){
		var rsSize = "";

		return rsSize;
	};

	/**
     * 格式化钱币方法
	 */
	exports.formatMoney = function(howMany,divide,unit){
		
	};
});