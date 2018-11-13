//(function($){
//$.fn.showhtml=function(){
  alert(this.html());
	};
//})(jQuery);
//$.fn.extend({
	showhtml:function(){
		alert(this.html());
	},
	showtext:function(){
		alert(this.text());
	}
//});
jQuery.extend ({
	add:function(a,b){
		return a+b;
	},
	multi:function(a,b){
		return a*b;
	}
});