define(function(require,exports,module){
	var aSpan=$('.portfolio_holder li span');
	var aLi=$('.portfolio_holder li');

	exports.automatic_play=function (){
		var n=0;
		var bready=true;
		var timer=null;
		function tab(){
			n++;
			if (n == aLi.length){
				n=0;
			}
			aLi.each(function (index){
				aLi.css({'opacity':0,'z-index':1});
				aSpan.css('height',0);
				aLi.eq(n).stop().animate({'opacity':1,'z-index':2},'500');
				aSpan.eq(n).stop().animate({'height':70});
			});
		}
		clearInterval(timer);
		timer=setInterval(tab,5000);
		$('.next').mouseenter(function (){
			clearInterval(timer);
		});
		$('.prev').mouseenter(function (){
			clearInterval(timer);
		});
		$('.next').mouseleave(function (){
			timer=setInterval(tab,5000);
		});
		$('.prev').mouseleave(function (){
			timer=setInterval(tab,5000);
		});
		$('.next').click(function (){
			if(!bready)return;
			bready=false;
			n++;
			if (n == aLi.length){
				n=0;
			}
			aLi.each(function (index){
				aLi.css({'opacity':0,'z-index':1});
				aLi.eq(n).stop().animate({'opacity':1,'z-index':2},'500',function(){   bready=true;

				});
				aSpan.eq(n).stop().animate({'height':70});
			});
		});
		$('.prev').click(function (){
			if(!bready) return;
			bready=false;
			n--;
			if (n == -1){
				n=aLi.length-1;
			}
			aLi.each(function (index){
				aLi.css({'opacity':0,'z-index':1});
				aLi.eq(n).stop().animate({'opacity':1,'z-index':2},'500',function(){bready=true;});
				aSpan.eq(n).stop().animate({'height':70});
			});
		});
		
	};
});