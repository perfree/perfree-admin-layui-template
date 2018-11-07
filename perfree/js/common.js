//工具类示例,调用直接util.test();
(function($){
	var util = function(){}
	util.prototype = {
			
		test:function(){
			alert("123");
		},
		
		demo:function(){
			alert("456");
		}
	}
	window.util = new util();
})(window.jQuery);