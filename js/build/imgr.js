!function($){var scrollEl,context,evToBind="touchmove.imgr mousewheel.imgr",imgrClass="imgr",imgrrdClass="imgrrd",imgrrClass="imgrr",errorMessage="imgr:error loading image",elements=[],evBinded=!1,checkingForLoad=!1,params={},checkAndLoad=function(){var timer=0;$(window).bind(evToBind,function(){timer&&clearTimeout(timer),elements.length?timer=setTimeout(function(){var cnt=0,inId=setInterval(function(){6>cnt?(loadIfOnScreen(),cnt++):clearInterval(inId)},300)},100):elements.length||setTimeout(function(){$("."+imgrClass+":not(."+imgrrdClass+"),."+imgrrClass+":not(."+imgrrdClass+")",context).length||($(window).unbind(evToBind),evBinded=!1)},5e3)})},loadIfOnScreen=function(){if(!checkingForLoad){checkingForLoad=!0;for(var i=0;i<elements.length;i++){var ele=$(elements[i]);(params.atOnce||isOnScreen(ele))&&(loadImg(ele),elements.splice(i,1),i--)}checkingForLoad=!1}},isOnScreen=function(elem){var viewport={top:scrollEl.scrollTop(),left:scrollEl.scrollLeft()};viewport.right=viewport.left+scrollEl.width(),viewport.bottom=viewport.top+scrollEl.height();var bounds=elem.offset();return bounds.right=bounds.left+elem.outerWidth(),bounds.bottom=bounds.top+elem.outerHeight(),viewport.right<bounds.left-params.margin||viewport.left>bounds.right+params.margin||viewport.bottom<bounds.top-params.margin||viewport.top>bounds.bottom+params.margin?void 0:!0},displayImg=function(type,ele,src){ele.hasClass(imgrrdClass)||("div"===type?ele.css("background-image","url("+src+")"):ele.attr("src",src),ele.removeClass(imgrrClass),ele.addClass(imgrrdClass),params.fadeIn?ele.animate({opacity:1},2e3):ele.css("opacity",1),setTimeout(function(){ele.css("background-color","inherit")},300))},loadImg=function(ele){var src=""+ele.attr("data-src");if(src&&src.length>0){var type=ele.attr("tagName");void 0===type&&(type=ele.prop("tagName")),type=type.toLowerCase(),$("<img/>").load(function(){displayImg(type,ele,src)}).ready(function(){displayImg(type,ele,src)}).error(function(){console.log(errorMessage)}).attr("src",src)}},setParams=function(options){options=options||{},params.atOnce=options.atOnce||!1,params.margin="undefined"!=typeof options.margin?options.margin:50,params.fadeIn="undefined"!=typeof options.fadeIn?options.fadeIn:!0},setUpDom=function(){var newElements=$("."+imgrClass,context),time=(new Date).getTime();newElements.each(function(index){var ele=$(this);ele.attr("id","imgr_"+index+"_"+time).addClass(imgrrClass).css({opacity:"0.05","background-color":"grey","min-height":(ele.height()||150)+"px","min-width":(ele.width()||150)+"px"}),ele.width()||ele.css("min-width","100px")}),elements=elements.length?$.merge(elements,newElements):newElements};$.fn.imgr=function(options){context=$($(this).length?this:"body"),scrollEl=$(window),setParams(options),setUpDom(),evBinded||params.atOnce||(checkAndLoad(),evBinded=!0),loadIfOnScreen()}}($);
//# sourceMappingURL=imgr.map