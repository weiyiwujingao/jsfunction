// JavaScript Document
(function($){/*弹窗事件处理*/
	$.fn.winInit = function(){//初始分关闭 按钮点击事件
		$(this).each(function(i){
            var cls = $(this).find('.qCls'),
			btn = $(this).find('.qWbtn'),
			bli = $(btn).children('a');
			$(this).css('position','fixed');
			$(cls).each(function(j){
                $(this).bind('click',function(){
					$(this).parents('.qWin').css('display','none');
					$('.qMask').css('display','none');
				})
            });
			$(bli).each(function(i){
				if($(this).hasClass('undo')){
					$(this).bind('click',function(){
						$(this).parents('.qWin').css('display','none');
						if($('.qWin:visible').length == 0){
							$('.qMask').css('display','none');
						}
					});
				}
            });
        });
	}
	$.fn.winPlace = function(){//初始化弹窗位置及高度
		$(this).each(function(i){
            var w = document.documentElement.clientWidth,
			h = document.documentElement.clientHeight,
			//sTop = $(window).scrollTop(),
			sh = $('body').outerHeight(true),
			_h = $(this).height(),
			_w = $(this).outerWidth(true),
			_ah = $(this).outerHeight(true) - $(this).height(),
			left = (w - _w)/2,
			top = (h - _h - _ah)/2;
			if(_h > h){
				var con = $(this).find('.qWmess'),
				_ch = $(con).prev().outerHeight(true) + $(con).next().outerHeight(true) + ($(con).outerHeight(true) - $(con).height()) + _ah;
				$(this).css('height',(h-_ah)+'px');
				$(con).css('height',(h-_ch)+'px');
			}else{
				var con = $(this).find('.qWmess');
				$(con).css('height','auto');
			}
			left = left < 0?0:left;
			top = top < 0?0:top;
			
			$(this).css({'left':left+'px','top':top+'px'});
        });
	}
	$.fn.showWin = function(msg,til){//显示弹窗
		$(this).each(function(i){
			if(typeof msg != 'undefined'){
				$(this).find('.qWmess').html(msg);
			}
			if(typeof til !== 'undefined'){
				$(this).find('h3>span').html(til);
			}
            $(this).css('display','block');
			var mask = $('.qMask'),
			w = document.documentElement.clientWidth,
			h = document.documentElement.clientHeight,
			sh = $('body').outerHeight(true);
			$(this).winPlace();
			$(mask).css({'height':(h<sh?sh:h)+'px','display':'block'});
        });	
	}
	$.fn.hidWin = function(){//隐藏弹窗
		$(this).each(function(i){
            $(this).css('display','none');
			$('.qMask').css('display','none');
        });
	}
	$('.qWin').winInit();//初始化弹窗关闭事件
})(jQuery);